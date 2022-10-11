import React, { useState, useRef, useEffect, Ref } from 'react'
import { CalciteButton, CalciteInput, CalciteLabel } from '@esri/calcite-components-react';
import axios from 'axios';
import {isValidMapService, collectFeatures} from './helpers'

const countQuery = '/query?&where=objectid>0&returnCountOnly=true&f=json'


export interface MapServiceProperties {
  layerTitle?: string;
  parentLayer?: string;
  url?: string;
  supportsQuery?: Boolean;
  numFeatures?: number;
  numOtherLayers?:number;
}

interface ButtonState {
  color: "blue" | 'inverse' | 'red' | 'neutral' | undefined; //  did not work with curent react typings, gave type error
  loading?: boolean | undefined;
  statusMessage?: string;
}

function ServiceItem() {
  const [url, setUrl] = useState('')
  const [buttonState, setButtonState] = useState<ButtonState>({
    color:'blue',
    loading:undefined,
    statusMessage:'Fetch features'
  })
  const [mapServiceProperties, setMapServiceProperties] = useState<MapServiceProperties>({})

  async function handleUrlSubmit(url:string) {
    if (isValidMapService(url)) {
      setButtonState({
        color:'blue', 
        loading:true,
        statusMessage:'Checking that layer supports querys..'
      })
      const parsedUrl = new URL(url);
      const baseUrl = parsedUrl.origin + parsedUrl.pathname.slice(0,parsedUrl.pathname.indexOf('/MapServer')+10)
      console.log(baseUrl)
      const res = await axios.get(baseUrl+"/0"+countQuery)
      console.log(res)
      switch(res.data.status){
        case 499:
          setButtonState({
            color:'red', 
            loading:false,
            statusMessage:'Not public'
          })
          break
        case 400:
          setButtonState({
            color:'red', 
            loading:false,
            statusMessage:'Query not supported'
          })
          break
        default:
          setButtonState({
            color:'blue', 
            loading:true,
            statusMessage:'Aggregating features'
          })
          let count = res.data;
          collectFeatures(baseUrl, count)
      }
  
    } else{
      setButtonState({
        color:'red', 
        loading:undefined,
        statusMessage:'Url Invalid'
      })
    }

    return 
  }



  return (
    <div>
      <form>
        <CalciteLabel> {mapServiceProperties.layerTitle ? mapServiceProperties.layerTitle : 'Enter URL to Map Service'  }
          <CalciteInput 
            icon='layer-map-service'
            placeholder='URL'
            value={url}
            type='url'
            onCalciteInputChange={ (event)=> {
              event.preventDefault()
              setUrl(event.target.value)
            }}
          />
        </CalciteLabel>
        <CalciteButton
          scale='s'
          onClick={()=>{handleUrlSubmit(url)}}
          loading={buttonState.loading}
          appearance='clear'
          color={buttonState.color as "blue" | 'inverse' | 'red' | 'neutral' | undefined}
          iconStart='submit'
        > {buttonState.statusMessage} </CalciteButton>
      </form>
    </div>
  )
}

export default ServiceItem