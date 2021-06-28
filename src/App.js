
import './App.css';
import InputSearch from './utils/InputSearch/InputSearch';
import SearchResult from './utils/SearchResult/SearchResult';
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {requestApiData} from './actions';
function App() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const dataFromReducer = useSelector((state)=>state.data);




  function handleChange(val){
    setValue(val);
    }
 
    const handleClick = async ()=>{
    console.log("click");
    console.log(value)
    await dispatch(requestApiData(value))
  
  
    };

  return (
    <div className="App">
      <InputSearch handleChange={handleChange}  handleClick={handleClick} value={value} />
      <SearchResult/>
    
       {
          dataFromReducer.map((item, id) => {
            let song='(Name not found)';
            let artist = '(Name not found)'
            if(item.song!==undefined){
           song = item.song;}
           artist = item.artist;
            return (
              <div key={id}>
              <SearchResult id={item.id} song={song} artist={artist}/>
             </div>
            );
        })
}
    
     
    </div>
  );
}

export default (App)
