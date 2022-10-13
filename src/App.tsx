import  { useState} from 'react';
import {CalciteAction, CalciteActionBar, CalciteFab} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';
import ServiceItem from './components/ServiceItem/ServiceItem';
import ServiceItemList from './components/ServiceItemList';

const sampleServices = [
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Energy/Geology/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/SpatioTemporalAggregation/RainfallTimeSeriesDataIllinois/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/MapServer'
 ]

 function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  let seed = {seedUrl:undefined}
  const [list, setList] = useState([<ServiceItem {...seed}/>])

  function updateList(prevList:any)  {
    setList([...prevList, <ServiceItem {...seed} />])
  }

  function updateListWithSeedUrl(prevList:any)  {
    let seeded={seedUrl:sampleServices[getRandomInt(0,4)]}
    console.log(seed)
    setList([...prevList, <ServiceItem {...seeded} />])
  }

  return (
  <div className="App">
    <h1>Hello, React</h1>
    <ServiceItemList items={list}/>
    <CalciteActionBar style={{marginTop:'1em'}} layout='horizontal' expanded>
      <CalciteAction 
        icon='plus'
        text='Add service'
        onClick={()=>{
          updateList(list)
        }}
      />
      <CalciteAction 
        text='Use sample service'
        icon='group-form-plus'
        onClick={()=>{
          updateListWithSeedUrl(list)
        }}
      />
    </CalciteActionBar>
  </div>
  );
}

export default App;
