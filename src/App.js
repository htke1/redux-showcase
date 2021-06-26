
import './App.css';
import InputSearch from './utils/InputSearch/InputSearch';
import SearchResult from './utils/SearchResult/SearchResult';
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {requestApiData} from './actions';
function App(props) {
  const [value, setValue] = useState('');
  const [jsonFile, setResult] = useState([])

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.data);
  useEffect(()=>{
   setResult(props.data);
  },[props.data])

  function handleChange(val){
    setValue(val);
    }
 
    const handleClick = ()=>{
    console.log("click");
    dispatch(requestApiData())
    };
   const {artistName} = data;
  return (
    <div className="App">
      <InputSearch handleChange={handleChange}  handleClick={handleClick} value={value} />
      <SearchResult details={jsonFile}/>
     

       
           <h3>{JSON.stringify(data)}</h3>
         
       
    
     {console.log(data)}
    </div>
  );
}

export default (App)
