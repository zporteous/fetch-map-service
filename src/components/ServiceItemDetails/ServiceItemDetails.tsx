import { MapServiceProperties, LayerElement, TableElement, OrganizedLayers } from '../../global/types'
import { CalciteList, CalciteAction } from '@esri/calcite-components-react';
import ServiceItemDetailsElement from '../ServiceItemDetailsElement/ServiceItemDetailsElement';
import ServiceItemDetailsAccordian from '../ServiceItemDetailsAccordian/ServiceItemDetailsAccordian';
import './styles.css';

import { groupLayersPresent, organizeGroupLayers } from '../ServiceItem/helpers';

function ServiceItemDetails(props:MapServiceProperties) {
  // make flags for presence of tables and layers
  if(props.tables!==undefined){
    var tablesPresent = props.tables.length > 0 ? undefined : true;
  }
  if(props.layers!==undefined) {
    var layersPresent = props.layers!.length > 0 ? undefined : true;
  }
  // if rendering group layers, organize the layers so that they can be passed to accrodian component
  let organizedGroupLayers:OrganizedLayers[] = [];
  let renderGroups;
  if (groupLayersPresent(props)) {
    renderGroups=true;
    organizedGroupLayers = organizeGroupLayers(props)
    const noSubLayers = props.layers?.filter((layer:LayerElement)=>{return layer.subLayerIds===null})
  } else {
    renderGroups = false;
  }

  let noSubLayers = props.layers?.filter((layer:LayerElement)=>{return layer.subLayerIds===null})
  if(noSubLayers===undefined){
    noSubLayers=[]
  }

  return (
    <div id='service-item-details-container'>
      <div className='service-item-details-column'>
        <h3 className='detail-title'>Layers</h3><div></div>
          {layersPresent !== undefined ?
            <div>No Layers Present</div>
              : renderGroups ? // are we rendering group layers? if so render accordians before ungrouped layers
                <ServiceItemDetailsAccordian
                  organizedLayers={organizedGroupLayers}
                  mapServiceProperties={props}
                />
            : noSubLayers!.length > 0 ?
              <CalciteList>
                <div>
                  {noSubLayers!.map((r:LayerElement, index)=>{
                      return <ServiceItemDetailsElement key={index} {...{element:r, mapServiceProperties:props}}/>
                  })}
                </div>
              </CalciteList>
              :
              <></>
          }       
      </div>
      <div className='service-item-details-column'>
        <h3 className='detail-title'>Tables</h3><div></div>
          {tablesPresent !== undefined ?
            <div>No Tables Present</div>
            : 
            <CalciteList>
              <div>
                {props.tables?.map((r:TableElement, index)=>{
                    return <ServiceItemDetailsElement key={index} {...{element:r, mapServiceProperties:props}}/>
                })}
              </div>
            </CalciteList>
          }   
      </div>
    </div> 
  )
}

export default ServiceItemDetails