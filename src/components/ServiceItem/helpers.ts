import axios, { AxiosResponse } from 'axios';
import { group } from 'console';
import { InitialQueryResponse, LayerElement, MapServiceProperties, OrganizedLayers } from '../../global/types';

/*
get count of features
/query?&where=objectid>0&returnCountOnly=true&f=json

repeat this query until all features are collected
/query?&where=objectid>=1000+and+objectid<1999&f=geojson&outFields=*
*/

export function isValidMapService(url:string) {
  return (url.includes('/rest/services') && url.includes('/MapServer')) ?  true : false;
}

// https://atlas.ghd.com/arcgis/rest/services/Features/MapServer - requires token
// https://npgis.cityofnorthport.com/cnpserver/rest/services/Data/Streets/MapServer/0 - valid public url
// 

export function initialQuery(url:string):Promise<InitialQueryResponse> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const baseUrl = parsedUrl.origin + parsedUrl.pathname.slice(0,parsedUrl.pathname.indexOf('/MapServer')+10)
    axios.get(baseUrl+'?f=json')
      .then((res:AxiosResponse)=> {
        console.log(res.data)
        if(!res.data.error) {
          res.data.capabilities.includes("Query") ? resolve({data:res.data, baseUrl:baseUrl, path:parsedUrl.pathname})
            : reject({message:"Query not supported"})
        } else if (res.data.error.code===499) {
          reject({message:"Service not public"})
        } 
      })
      .catch(e => {
        reject({message:"Something went wrong with request..",error:e})
      })
  })
}

export function groupLayersPresent(mapProps:MapServiceProperties):boolean{
  const values = mapProps.layers?.filter((layer:LayerElement)=>{return layer.type === 'Group Layer'})
  if (values !== undefined){
    if(values!.length>0){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export function organizeGroupLayers(mapProps:MapServiceProperties):OrganizedLayers[]{
  const values = mapProps.layers?.filter((layer:LayerElement)=>{return layer.type === 'Group Layer'});
  const organizedLayers:OrganizedLayers[] = [];
  values?.forEach((parentLayer:LayerElement)=>{
    const subLayers = mapProps.layers?.filter((layer:LayerElement)=>{
      if (parentLayer.subLayerIds !== null && parentLayer.subLayerIds !== undefined) {
        if (parentLayer.subLayerIds.includes(layer.id!)) {
          return layer;
        }
      } 
    })
    let organizedLayer:OrganizedLayers = {
      parentLayer: parentLayer,
      subLayers: subLayers
    }
    organizedLayers.push(organizedLayer);
  })
  return organizedLayers;
}






