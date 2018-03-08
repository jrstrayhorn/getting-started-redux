import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

import reducers from './reducers';

import TodoApp from './components/TodoApp';

const todoApp = combineReducers(reducers);
const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
