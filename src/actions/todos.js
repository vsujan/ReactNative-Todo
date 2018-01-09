import * as types from './types';

export function addNewTodo(todo) {
  return (dispatch)
  {
    dispatch(todoList(todo));
  }
}

export function updateTodo(todo) {
  return (dispatch)
  {
    dispatch(todoList(todo));
  }
}

export function deleteTodo(todo) {
  return (dispatch)
  {
    dispatch(todoList(todo))
  }
}


export const todoList = todos => {
  return {
    type: types.TODO_LIST,
    data: todos
  }
};
