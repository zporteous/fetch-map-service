
import axios from "axios";



//:Promise<MapServiceProperties>

export interface GetCountReturnValue {
  count:number;
  numQueries:number; // used for foor loop, increment for loop by maxRecordCount
}

import { LayerElement } from "../../global/types"

export async function getCount(baseUrl:string, layer:LayerElement, maxRecordCount:number):Promise<GetCountReturnValue> {
  let q = '/query?&where=objectid>0&returnCountOnly=true&f=json'
  return new Promise((resolve, reject) => {
  axios.get(baseUrl+q)
    .then((res)=> {
      let num=res.data.count/maxRecordCount
      resolve({
        count:res.data.count,
        numQueries:Number(num.toFixed(1))
      })
    })
    .catch((e)=> {
      reject(e)
    })
  })
}