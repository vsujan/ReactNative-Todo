import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { configureStore } from './store';
import { Router, Scene, Actions } from 'react-native-router-flux';
import todoList from './screens/todo/todosContainer';
import addTodo from './screens/todo/addTodoContainer';

const store = configureStore({});
const RouterWithRedux = connect()(Router);

const RightIcon = () => {
  return (
    <Text style={{ color: 'gray' }}>ADD</Text>
  )
};

const _addTodo = () => {
  Actions.addTodo();
}

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene
              key="todoList"
              component={todoList}
              title="Todo List"
              // navigationBarStyle = {styles.header}
              // titleStyle = {styles.text}
              onRight={_addTodo}
              rightTitle={RightIcon}
              initial
            />
            <Scene
              key="addTodo"
              component={addTodo}
              title="Add Todo"
            />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
};
