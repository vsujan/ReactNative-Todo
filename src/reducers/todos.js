import * as types from '../actions/types';
import createReducer from '../lib/createReducer';

export const todoList = createReducer({}, {
  [types.TODO_LIST](state, action) {
    if (action.data) {
      return action.data;
    }

    return state;
  }

});
