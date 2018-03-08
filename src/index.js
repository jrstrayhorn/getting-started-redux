import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(
  throttle(() => {
    saveState({ todos: store.getState().todos });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
