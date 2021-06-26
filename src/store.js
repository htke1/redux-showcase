import { createStore, applyMiddleware } from "redux";
import {} from 'react-redux'
import createSagaMiddleware from "@redux-saga/core";
import  combineReducers  from "./reducers/index";
import saga from './saga'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

export default store;