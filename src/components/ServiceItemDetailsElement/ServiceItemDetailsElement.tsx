import React from 'react'
import { LayerElement } from '../../global/types'
import { CalciteListItem, CalciteAction } from '@esri/calcite-components-react'

export default function ServiceItemDetailsElement(props:LayerElement) {
  return (
    <CalciteListItem
      label={props.name}
      description={`${props.geometryType} - ${props.type}`}
      nonInteractive
    >
      <CalciteAction text='' slot="actions-end" icon="download"></CalciteAction>
    </CalciteListItem>
    
  )
}
