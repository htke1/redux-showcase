import axios from 'axios'
export const fetchData = async () =>{
   const dataFromUrl = await axios(`https://itunes.apple.com/search?term=hungary`);
   const {data:{results}} = await dataFromUrl;
    return results;
}