import React, { useState, useRef, useEffect, Ref } from 'react'
import { CalciteButton, CalciteInput, CalciteLabel } from '@esri/calcite-components-react';


interface MapServiceProperties {
  layerTitle?: string;
  parentLayer?: string;
  url?: string;
  supportsQuery?: Boolean;
  numFeatures?: number;
  numOtherLayers?:number;
}

function ServiceItem() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState<boolean>()
  const [statusMessage,setStatusMessage] = useState('Fetch Features')
  const [buttonState, setButtonState] = useState<"blue" | 'inverse' | 'red' | 'neutral' >('blue')
  const [mapServiceProperties, setMapServiceProperties] = useState<MapServiceProperties>({})

  async function handleUrlSubmit(url:string) {
    if (url.includes('/MapServer') ) {
      setButtonState('blue')
      setLoading(true)
      setStatusMessage('Checking that layer supports querys..')
      
      
    } else{
      setButtonState('red')
      setStatusMessage('Not Valid URL')
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
          loading={loading}
          appearance='clear'
          color={buttonState}
          iconStart='submit'
        > {statusMessage} </CalciteButton>
      </form>
    </div>
  )
}

export default ServiceItem