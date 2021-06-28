import axios from 'axios'
export const fetchData = async (value) =>{
   const dataFromUrl = await axios(`https://itunes.apple.com/search?term=${value}`);
   const {data:{results}} = await dataFromUrl;
   let finalRes = results.map(item=>({song: item.trackName, artist: item.artistName, id: item.trackId}))
   console.log(finalRes) 
   return finalRes;
   
}