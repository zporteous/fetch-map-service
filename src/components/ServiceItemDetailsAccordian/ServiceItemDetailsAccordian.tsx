import React from 'react'
import { MapServiceProperties, OrganizedLayers } from '../../global/types'
import { CalciteAccordion, CalciteAccordionItem, CalciteList } from '@esri/calcite-components-react'
import { LayerElement } from '../../global/types';
import ServiceItemDetailsElement from '../ServiceItemDetailsElement/ServiceItemDetailsElement';

interface ServiceItemDetailsAccordianProps {
  organizedLayers: OrganizedLayers[],
  mapServiceProperties: MapServiceProperties
}

function ServiceItemDetailsAccordian(props:ServiceItemDetailsAccordianProps) {
  return (
    <div>
      {props.organizedLayers.map((organizedLayer)=>{
        return <CalciteAccordion>
          <CalciteAccordionItem
            item-title={organizedLayer.parentLayer?.name}
            item-subtitle={`layers`}
          >
            <CalciteList>
              <div>
                {organizedLayer.subLayers!.map((r:LayerElement, index:number)=>{
                    return <ServiceItemDetailsElement key={index} {...{element:r, mapServiceProperties:props.mapServiceProperties}}/>
                })}
              </div>
            </CalciteList>
          </CalciteAccordionItem>
        </CalciteAccordion>
    })}
    </div>
  )
}

export default ServiceItemDetailsAccordian