import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}
