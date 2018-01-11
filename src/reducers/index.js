import { combineReducers } from 'redux';
import *  as todosReducer from './todos';
import * as routesReducer from './route';

export default combineReducers(Object.assign(
  todosReducer,
  routesReducer
));
