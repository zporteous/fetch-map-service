import axios, { AxiosResponse } from 'axios';
import { InitialQueryResponse } from '../../global/types';

/*
get count of features
/query?&where=objectid>0&returnCountOnly=true&f=json

expected if behind auth
{
 "error": {
  "code": 499,
  "message": "Token Required",
  "details": []
 }
}

expected if query not supported

{
 "error": {
  "code": 400,
  "extendedCode": -2147220222,
  "message": "Requested operation is not supported by this service.",
  "details": [
   "The requested capability is not supported."
  ]
 }
}

repeat this query until all features are collected
/query?&where=objectid>=1000+and+objectid<1999&f=geojson&outFields=*


download=concat(res.data.features)

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
    console.log(baseUrl)
    axios.get(baseUrl+'?f=json')
      .then((res:AxiosResponse)=> {
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

//:Promise<MapServiceProperties>
export async function collectFeatures(baseUrl:string, count:number) {
  // const baseResponse = await axios.get(baseUrl+'?f=json')
  let q = '/query?&where=objectid>0&returnCountOnly=true&f=json'
  console.log(count)
 
}


