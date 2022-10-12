import {useRef, useState} from 'react'
import { CalciteButton, CalciteInput, CalciteLabel, CalciteModal } from '@esri/calcite-components-react';
import {isValidMapService, initialQuery} from './helpers'
import { ButtonState, MapServiceProperties } from '../../global/types';
import ServiceItemDetails from '../ServiceItemDetails/ServiceItemDetails';



function ServiceItem() {
  const [url, setUrl] = useState('')
  const [buttonState, setButtonState] = useState<ButtonState>({
    color:'blue',
    loading:undefined,
    statusMessage:'Fetch features',
    icon:'submit'
  })

  const modalRef = useRef<HTMLCalciteModalElement>() // have to use Ref for modal - was not working with react state

  const [mapServiceProperties, setMapServiceProperties] = useState<MapServiceProperties>({})

  async function handleUrlSubmit(url:string) {
    if (isValidMapService(url)) {
      setButtonState({
        color:'blue', 
        loading:true,
        statusMessage:'Checking that layer supports querys..',
        icon:'submit'
      })
      initialQuery(url)
        .then(async (res)=> {
          console.log(res.data)
          setMapServiceProperties({
            layers:res.data.layers,
            tables:res.data.tables,
            url:res.baseUrl,
            path: res.path,
            maxRecordCount:res.data.maxRecordCount
          })
          setButtonState({
            color:'blue', 
            loading:undefined,
            statusMessage:'Fetched',
            icon:'check',
            disabled:true
          })
        })
        .catch((e)=> {
          setButtonState({
            color:'red', 
            loading:undefined,
            statusMessage:e.message,
            icon:'x'
          })
        })
    } else{
      setButtonState({
        color:'red', 
        loading:undefined,
        statusMessage:'Url Invalid',
        icon:'x'
      })
    }
    return 
  }

  return (
    <div>
      <form>
        <CalciteLabel> {mapServiceProperties.path ? mapServiceProperties.path : 'Enter URL to Map Service'  }
          <CalciteInput 
            icon='layer-map-service'
            placeholder='URL'
            value={url}
            type='url'
            disabled={buttonState.disabled}
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
          iconStart={buttonState.icon}
          disabled={buttonState.disabled}
        > {buttonState.statusMessage} </CalciteButton>
        <CalciteButton
          style={{marginLeft:'.5em'}}
          scale='s'
          onClick={()=>{
            if(modalRef?.current !== undefined) {
              modalRef.current.open=!modalRef.current.open
            }
          }}
          disabled={mapServiceProperties.url !== undefined ? undefined : true}
        >View Details</CalciteButton> 
      </form>
      <CalciteModal
        id='modal'
        ref={modalRef as any}
        width='l'
      > 
        <div slot='header'>{mapServiceProperties.path}</div>
        <div slot='content'>
        <ServiceItemDetails {...mapServiceProperties}/>
        </div>
      </CalciteModal>
    </div>
  )
}

export default ServiceItem