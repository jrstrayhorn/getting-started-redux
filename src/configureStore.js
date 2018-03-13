import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';

const thunk = store => next => action =>
  typeof action === 'function' ? action(store.dispatch) : next(action);

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
