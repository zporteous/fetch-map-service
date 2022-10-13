
import axios from "axios";
import { LayerElement, TableElement, GetCountReturnValue } from "../../global/types"


//:Promise<MapServiceProperties>





export async function getCount(baseUrl:string, layer:LayerElement, maxRecordCount:number):Promise<GetCountReturnValue> {
  
  let countQuery =`/${layer.id}/query?&where=objectid>0&returnCountOnly=true&f=json`
  let maxObjectIdQuery =`/${layer.id}/query?&where=objectid>0&returnIdsOnly=true&f=json`
  console.log(baseUrl+countQuery)
  return new Promise((resolve, reject) => {
  axios.get(baseUrl+countQuery)
    .then(async (res)=> {
      const oidQueryRes = await axios.get(baseUrl+maxObjectIdQuery)
      console.log(oidQueryRes.data)
      if (oidQueryRes.data.objectIds===null) {
        reject({message:"layer is empty or non - compatible"})
      } else {
        let num=res.data.count/maxRecordCount
        resolve({
          count:res.data.count,
          numQueries: num < 1 ? 1 : Number(Math.ceil(num)),
          maxObjectId: Math.max(...oidQueryRes.data.objectIds)
        })
      }
    })
    .catch((e)=> {
      reject({message:'error with requests:'+e.message})
    })
  })
}

export function isLayer(element: LayerElement | TableElement): element is LayerElement {
  return (element as LayerElement).geometryType !== undefined;
}