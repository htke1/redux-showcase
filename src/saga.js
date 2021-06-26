import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {REQUEST_API_DATA} from './actions';
import { recieveApiData } from './actions';
import {fetchData} from './api'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   
   try {
      const data = yield call(fetchData);
      yield put(recieveApiData(data));
   } catch (e) {
      console.log(e);
   } 
}



//Watcher saga

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeEvery(REQUEST_API_DATA, getApiData);
}