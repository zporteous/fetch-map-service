import  { useState} from 'react';
import {CalciteFab} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';
import ServiceItem from './components/ServiceItem/ServiceItem';
import ServiceItemList from './components/ServiceItemList';

const sampleServices = [
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer',
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Energy/Geology/MapServer'
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
    let seed={seedUrl:sampleServices[getRandomInt(0,3)]}
    setList([...prevList, <ServiceItem {...seed} />])
  }

  return (
  <div className="App">
    <h1>Hello, React</h1>
    <ServiceItemList items={list}/>
    <CalciteFab
        onClick={()=>{
          updateList(list)
        }}
      />
  </div>
  );
}

export default App;
