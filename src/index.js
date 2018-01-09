import { Provider } from 'react-redux';
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers';
import MainScreen from './screens';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const store = configureStore({});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    )
  }
};
