import { ReactNode } from 'react'

/*
response from teh first query sent to teh service after submission 
*/ 
export interface InitialQueryResponse {
  message?:string;
  error?: string | Object;
  data?:any;
  baseUrl?: string;
  path?: string;
}

/*
list component, need to fix IDs
*/ 
export interface ServiceItemListProps {
  items: ReactNode[],
}

/*
Populates the Modal upon successful fetch
*/ 
export interface MapServiceProperties {
  layers?: Object[];
  tables?: Object[];
  url?: string;
  maxRecordCount?: number;
  path?:string;
}

/*
updates state of indidivudal map service fetch
*/ 
export interface ButtonState {
  color: "blue" | 'inverse' | 'red' | 'neutral' | undefined; //  did not work with curent react typings, gave type error
  loading?: boolean;
  statusMessage?: string;
  icon: string;
  disabled?: boolean;
  action?:Function;
}

// response after /MapServer for the layers attribute 
export interface LayerElement {
  defaultVisibility?: boolean;
  geometryType?: string;
  id?: number;
  maxScale?: number ;
  minScale?: number;
  name?: string ;
  parentLayerId?: number;
  subLayerIds?: number[] | null;
  supportsDynamicLegends?: boolean 
  type?: string;
}

// response after /MapServer for the tables attribute 
export interface TableElement {
   id?: number,
   name?: string,
   type?: string
}

// response after Query to returnCountOnly and getting max objectId
export interface GetCountReturnValue {
  count:number;
  numQueries:number; // used for foor loop, increment for loop by maxRecordCount
  maxObjectId:number;
}

export interface OrganizedLayers {
  parentLayer?: LayerElement,
  subLayers?: LayerElement[]
}