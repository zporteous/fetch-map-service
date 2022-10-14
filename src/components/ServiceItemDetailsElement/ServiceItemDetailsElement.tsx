
import { LayerElement, TableElement, MapServiceProperties } from '../../global/types'
import { CalciteListItem, CalciteAction, CalciteProgress, CalciteAlert } from '@esri/calcite-components-react'
import { isLayer, getCount } from './helpers'
import axios from 'axios';
import { useState, useRef } from 'react';
import {GeoJSON} from 'geojson'
import { downloadAllLayers } from '../ServiceItemDetails/helpers';

interface ServiceItemDetailsElementProps {
  element: LayerElement | TableElement;
  mapServiceProperties: MapServiceProperties;
}

const download = (path:string, filename:string) => {
  // Create a new link
  const anchor = document.createElement('a');
  anchor.href = path;
  anchor.download = filename;
  // Append to the DOM
  document.body.appendChild(anchor);
  // Trigger `click` event
  anchor.click();
  // Remove element from DOM
  document.body.removeChild(anchor);
}; 

export default function ServiceItemDetailsElement(props:ServiceItemDetailsElementProps) {
  const [loaderValue, setLoaderValue] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [geojsonDownload, setGeojsonDownload] = useState({})
  const [listIcon, setListIcon] = useState<'download'|'x'>('download')
  interface AlertType {
    open?:boolean;
    message?:string;
  }
  const [alert, setAlert] = useState<AlertType>()

  // synchronous calls to collect data, nice for loading bar, slower 
  async function handleLayerDownload(){
    setLoaderValue(0)
    setLoading(true)
    let errorFlag=false;
    getCount(props.mapServiceProperties.url!, props.element, props.mapServiceProperties.maxRecordCount!)
      .then(async (data)=>{
        console.log(data)
        const {count, numQueries, maxObjectId} = data
        const {maxRecordCount, url} = props.mapServiceProperties
        const featureCollection:GeoJSON = {
          type:"FeatureCollection",
          features:[]
        }
        if(count < maxRecordCount!){ // have to request oids > 0 for when the oids are not sequential
          let oidQuery =`/${props.element.id}/query?&where=objectid>${0}&f=geojson`
          const collectRes = await axios.get(url+oidQuery)
          console.log(collectRes.data)
          if (collectRes.data.error){
            errorFlag=true
            setListIcon('x')
            setLoading(false)
            setAlert({
              open:true,
              message:`error with request ${JSON.stringify(collectRes.data.error)}`
            })
          } else {
            setLoaderValue(1)
            featureCollection.features.push(...collectRes.data.features)
          }
        } else {
          let iterator = 0;
          for (let i=1; i<numQueries+1; i+=1) {
            let iterateOidQuery =`/${props.element.id}/query?&where=objectid>=${iterator}+and+objectid<=${iterator+maxRecordCount!-1}&f=geojson`
            const collectRes = await axios.get(url+iterateOidQuery)
            console.log(collectRes.data)
            if (collectRes.data.error){
              errorFlag=true
              setListIcon('x')
              setLoading(false)
              setAlert({
                open:true,
                message:`error with request ${JSON.stringify(collectRes.data.error)}`
              })
              console.log(`error at features ${i} - ${i+=maxRecordCount!-1}`)
            } else {
              setLoaderValue(i/numQueries)
              featureCollection.features.push(...collectRes.data.features)
              iterator+=maxRecordCount!
            }
          }
        }
        setLoading(false)
        if(errorFlag){
          return
        } else{
          const file = JSON.stringify(featureCollection)
          const blob = new Blob([file]);                   // Step 3
          const fileDownloadUrl = URL.createObjectURL(blob);
          download(fileDownloadUrl, props.element.name!+'.geojson')
        }
        
      })
      .catch(e=>{
        setListIcon('x')
        setLoading(false)
        setAlert({
          open:true,
          message:`error with request ${JSON.stringify(e.message)}`
        })
        console.log(e.message)
      })
  }
  
  return (
    <div>
      {isLayer(props.element) ? 
        <CalciteListItem style={{marginBottom:'.5em'}}
          label={props.element.name}
          description={`${props.element.geometryType} - ${props.element.type}`}
          nonInteractive
        >
          <CalciteProgress value={loaderValue}></CalciteProgress>
          <CalciteAction 
            text='' 
            slot="actions-end" 
            icon={listIcon}
            onClick={handleLayerDownload}
            loading={loading}
          ></CalciteAction>
        </CalciteListItem>
      :
        <CalciteListItem style={{marginBottom:'.5em'}}
          label={props.element.name}
          description={`${props.element.type}`}
          nonInteractive
        >
          <CalciteAction 
            text='' 
            slot="actions-end" 
            icon={listIcon}
            onClick={handleLayerDownload}
            disabled={props.element.type==="Group Layer"? true : undefined}
          ></CalciteAction>
        </CalciteListItem>}
        <CalciteAlert
          color='red'
          label="calcite-alert"
          open={alert?.open}
        >
          <div slot="title">Error</div>
          <div slot="message">{alert?.message !== undefined ? alert?.message : ''}</div>
          
        </CalciteAlert>
      </div>
  )
}
