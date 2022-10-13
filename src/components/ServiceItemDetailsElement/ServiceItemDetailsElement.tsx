
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
  const [loading, setLoading] = useState<boolean>(false)
  const [geojsonDownload, setGeojsonDownload] = useState({})
  const [listIcon, setListIcon] = useState<'download'|'x'>('download')


  // synchronous calls to collect data, nice for loading bar, slower 
  async function handleLayerDownload(){
    setLoaderValue(0)
    setLoading(true)
    getCount(props.mapServiceProperties.url!, props.element, props.mapServiceProperties.maxRecordCount!)
      .then(async (data)=>{
        console.log(data)
        const {count, numQueries, maxObjectId} = data
        const {maxRecordCount, url} = props.mapServiceProperties
        const featureCollection:GeoJSON = {
          type:"FeatureCollection",
          features:[]
        }
        let iterator = 0;
        for (let i=1; i<numQueries+1; i+=1) {
          let iterateOidQuery =`/${props.element.id}/query?&where=objectid>=${iterator}+and+objectid<=${iterator+maxRecordCount!-1}&f=geojson`
          const collectRes = await axios.get(url+iterateOidQuery)
          console.log(collectRes.data)
          if (collectRes.data.error){
            console.log(`error at features ${i} - ${i+=maxRecordCount!-1}`)
          } else {
            setLoaderValue(i/numQueries)
            featureCollection.features.push(...collectRes.data.features)
            iterator+=maxRecordCount!
          }
        }
        setLoading(false)
      })
      .catch(e=>{
        setListIcon('x')
        setLoading(true)
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
            loading={loading}
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
