
import { LayerElement, TableElement, MapServiceProperties } from '../../global/types'
import { CalciteListItem, CalciteAction, CalciteProgress } from '@esri/calcite-components-react'
import { isLayer, getCount } from './helpers'
import axios from 'axios';
import { useState } from 'react';
import {GeoJSON} from 'geojson'


interface ServiceItemDetailsElementProps {
  element: LayerElement | TableElement;
  mapServiceProperties: MapServiceProperties;
}

export default function ServiceItemDetailsElement(props:ServiceItemDetailsElementProps) {

  const [loaderValue, setLoaderValue] = useState(0)
  const [geojsonDownload, setGeojsonDownload] = useState({})
  const [listIcon, setListIcon] = useState<'download'|'x'>('download')


  // synchronous calls to collect data, nice for loading bar, slower 
  async function handleLayerDownload(){
    setLoaderValue(0)
    getCount(props.mapServiceProperties.url!, props.element, props.mapServiceProperties.maxRecordCount!)
      .then(async (data)=>{
        console.log(data)
        const {count, numQueries, maxObjectId} = data
        const {maxRecordCount, url} = props.mapServiceProperties
        const featureCollection:GeoJSON = {
          type:"FeatureCollection",
          features:[]
        }
        for (let i=0; i<count+2; i+=maxRecordCount!-1) {
          let iterateOidQuery =`/${props.element.id}/query?&where=objectid>=${i}+and+objectid<=${i+=maxRecordCount!-1}&f=geojson`
          const collectRes = await axios.get(url+iterateOidQuery)
          console.log(collectRes.data)
          if (collectRes.data.error){
            console.log(`error at features ${i} - ${i+=maxRecordCount!-1}`)
          } else {
            setLoaderValue(i/count)
            featureCollection.features.push(...collectRes.data.features)
          }
        }
      })
      .catch(e=>{
        setListIcon('x')
        console.log(e)
      })
  }
  

  return (
      isLayer(props.element) ? 
        <CalciteListItem
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
          ></CalciteAction>
        </CalciteListItem>
      :
        <CalciteListItem
          label={props.element.name}
          description={`${props.element.type}`}
          nonInteractive
        >
          <CalciteAction 
            text='' 
            slot="actions-end" 
            icon={listIcon}
            onClick={handleLayerDownload}
          ></CalciteAction>
        </CalciteListItem>
  )
}
