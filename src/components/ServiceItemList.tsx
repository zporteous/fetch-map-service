import { ServiceItemListProps } from "../global/types";



 function ServiceItemList(props:ServiceItemListProps) {
  return (
    <div>
      {props.items.map((item, index)=>{
        return item;
      })}
    </div>
  );
}

export default ServiceItemList;
