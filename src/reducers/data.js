import { RECIEVE_API_DATA } from "../actions";
/*eslint-disable*/
const initialState = []
export default ( state=initialState,{type, data}) => {
    switch(type){
        case RECIEVE_API_DATA:
            return data;
        default:
            return state;    
    }   
};