import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/App';
import todoApp from './reducers';

const persistedState = {
  todos: [
    {
      id: 0,
      text: 'Welcome Back!',
      completed: false
    }
  ]
};

const store = createStore(todoApp, persistedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
