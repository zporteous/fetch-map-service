// import axios from 'axios';
// import {MapServiceProperties} from './ServiceItem'

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
  return (url.includes('arcgis/rest/services') && url.includes('/MapServer')) ?  true : false;
}

//:Promise<MapServiceProperties>
export async function collectFeatures(baseUrl:string, count:number) {
  // const baseResponse = await axios.get(baseUrl+'&f=json')
  let q = '/query?&where=objectid>0&returnCountOnly=true&f=json'
  console.log(count)
 
}


