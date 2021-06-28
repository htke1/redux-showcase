export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const RECIEVE_API_DATA = 'RECIEVE_API_DATA';

export const requestApiData = (value) =>({
type: REQUEST_API_DATA,
payload: value
})

export const recieveApiData = (data) => ({
    type: RECIEVE_API_DATA, 
    data
})
