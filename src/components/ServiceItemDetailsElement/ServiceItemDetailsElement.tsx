import React from 'react'
import { LayerElement, TableElement } from '../../global/types'
import { CalciteListItem, CalciteAction } from '@esri/calcite-components-react'
const countQuery = '/query?&where=objectid>0&returnCountOnly=true&f=json'
export default function ServiceItemDetailsElement(props:LayerElement | TableElement) {
  function isLayer(element: LayerElement | TableElement): element is LayerElement {
    return (element as LayerElement).geometryType !== undefined;
  }

  return (
      isLayer(props) ? 
        <CalciteListItem
        label={props.name}
        description={`${props.geometryType} - ${props.type}`}
        nonInteractive
        >
          <CalciteAction text='' slot="actions-end" icon="download"></CalciteAction>
        </CalciteListItem>
      :
      <CalciteListItem
      label={props.name}
      description={` ${props.type}`}
      nonInteractive
      >
        <CalciteAction text='' slot="actions-end" icon="download"></CalciteAction>
      </CalciteListItem>
  )
}
