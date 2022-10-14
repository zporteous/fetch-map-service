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
  'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/MapServer',
  'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Region_Division/MapServer',
  'https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_TAB2020/State_County/MapServer',
  'https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2018/State_County/MapServer',
  'https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2017/Places_CouSub_ConCity_SubMCD/MapServer'
 ]

 function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [lastSeed, setLastSeed] = useState<number>()
  
  let seed = {seedUrl:undefined}
  const [list, setList] = useState([<ServiceItem {...seed}/>])

  function updateList(prevList:any)  {
    setList([...prevList, <ServiceItem {...seed} />])
  }

  function updateListWithSeedUrl(prevList:any)  {
    let rand = getRandomInt(0,8)
    let seeded;
    if (rand === lastSeed) { // ensure same seed is not used twice in a row
      seeded={seedUrl:sampleServices[rand+1]}
      setLastSeed(rand+1)
    }
    let neww = getRandomInt(0,8)
    seeded={seedUrl:sampleServices[neww]}
    setLastSeed(neww)
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
