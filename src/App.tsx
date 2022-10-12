import  { useState} from 'react';
import {CalciteFab} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';
import ServiceItem from './components/ServiceItem/ServiceItem';
import ServiceItemList from './components/ServiceItemList';

function App() {

  const [list, setList] = useState([<ServiceItem/>])

  function updateList(prevList:any)  {
    setList([...prevList, <ServiceItem/>])
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
