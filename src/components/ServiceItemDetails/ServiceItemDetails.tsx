import React from 'react'
import { MapServiceProperties } from '../../global/types'

function ServiceItemDetails(props:MapServiceProperties) {
  return (
    <div>{props.layers?.map((r:any)=>{
        return <h1 key={r.id}>{r.id}sfsd</h1>
    })}</div>
  )
}

export default ServiceItemDetails