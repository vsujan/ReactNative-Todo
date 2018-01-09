import * as types from './types';
import todos from './todos.json';

export function addNewTodo(todo) {
  return dispatch => {
    dispatch(todoList(todo));
  }
}

export function updateTodo(todo) {
  return dispatch => {
    dispatch(todoList(todo));
  }
}

export function deleteTodo(todo) {
  return dispatch => {
    dispatch(todoList(todo))
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(todoList(todos))
  }
}


const todoList = (todos) => {
  return {
    type: types.TODO_LIST,
    data: todos
  }
};
