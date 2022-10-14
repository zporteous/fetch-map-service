import  { useState} from 'react';
import {CalciteAction, CalciteActionBar, CalciteIcon, CalciteLabel, CalciteLink} from '@esri/calcite-components-react';
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
    <div id='header'>
      <div>
        <CalciteLabel><h1>Mapservice Export</h1></CalciteLabel>
      </div>
      <div id='header-icon'>
        <CalciteIcon  icon='download'/>
      </div>
    </div>
    <div id='top-content'>
      <div>
        <p>
          Ever tried to add a service to your map in ArcGIS Pro only to find out you cant export features from it? 
          Use this React app to quickly receive geojson for any Feature Layer in a map service. For exporting to work
          the service must fulfill the following requirements:
        </p>
        <ul>
          <li>Must be Public</li>
          <li>Must support querying</li>
          <li>Must be a feature layer</li>
        </ul>
        <p>
          Pressing the Fetch features button will retrieve the service data - you can then press the "View Details" button to select an individual layer or table to download. 
        </p>
      </div>
      <div>
        
      </div>
    </div>
    <div id='main-content'>
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
    <div id='footer'>
      <CalciteLink href='https://zpdev.app/old-personal'> Visit Zach's Site</CalciteLink>
    </div>
  </div>
  );
}

export default App;
