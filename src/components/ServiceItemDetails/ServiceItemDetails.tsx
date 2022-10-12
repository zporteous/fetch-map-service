import React from 'react'
import { MapServiceProperties, LayerElement } from '../../global/types'
import { CalciteDropdown, CalciteDropdownItem, CalciteList, CalciteListItem, CalciteButton } from '@esri/calcite-components-react';
import ServiceItemDetailsElement from '../ServiceItemDetailsElement/ServiceItemDetailsElement';
function ServiceItemDetails(props:MapServiceProperties) {
  return (
    <div>

      <CalciteList>
        <div>
          {props.layers?.map((r:LayerElement, index)=>{
              return <ServiceItemDetailsElement {...r}/>
          })}
        </div>
      </CalciteList>

    </div> 
  )
}

export default ServiceItemDetails