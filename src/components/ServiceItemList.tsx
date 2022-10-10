import { CalciteFab } from '@esri/calcite-components-react';
import React, { ReactNode } from 'react'
import { JsxElement } from 'typescript';
import ServiceItem from './ServiceItem/ServiceItem';
import {useState} from 'react'

interface ServiceItemListProps {
  items: ReactNode[],
}

 function ServiceItemList(props:ServiceItemListProps) {
  return (
    <div>
      {props.items.map((item)=>{
        return item;
      })}
    </div>
  );
}

export default ServiceItemList;
