import React from 'react'
import { MapServiceProperties, LayerElement, TableElement } from '../../global/types'
import { CalciteDropdown, CalciteDropdownItem, CalciteList, CalciteListItem, CalciteButton, CalciteLabel, CalciteAction } from '@esri/calcite-components-react';
import ServiceItemDetailsElement from '../ServiceItemDetailsElement/ServiceItemDetailsElement';
import './styles.css';

function ServiceItemDetails(props:MapServiceProperties) {
  let tablesPresent = props.tables!.length > 0  ? undefined : true;
  let layersPresent = props.layers!.length > 0 ? undefined : true;
  return (
    <div id='service-item-details-container'>
      <div className='service-item-details-column'>
        <h3 className='detail-title'>Layers</h3><CalciteAction disabled={layersPresent} id='download-all-action' scale='s' icon='download-to' text=''>Download all</CalciteAction>
          {layersPresent !== undefined ?
            <div>No Layers Present</div>
            : 
            <CalciteList>
              <div>
                {props.layers?.map((r:LayerElement, index)=>{
                    return <ServiceItemDetailsElement {...r}/>
                })}
              </div>
            </CalciteList>
          }       
      </div>
      <div className='service-item-details-column'>
        <h3 className='detail-title'>Tables</h3><CalciteAction disabled={tablesPresent} id='download-all-action' scale='s' icon='download-to' text=''>Download all</CalciteAction>
          {tablesPresent !== undefined ?
            <div>No Tables Present</div>
            : 
            <CalciteList>
              <div>
                {props.tables?.map((r:TableElement, index)=>{
                    return <ServiceItemDetailsElement {...r}/>
                })}
              </div>
            </CalciteList>
          }   
      </div>
    </div> 
  )
}

export default ServiceItemDetails