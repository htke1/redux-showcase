export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECIEVE_API_DATA = 'RECIEVE_API_DATA';

export const requestApiData = () =>({
type: REQUEST_API_DATA
})

export const recieveApiData = (data) => ({
    type: RECIEVE_API_DATA, 
    data
})