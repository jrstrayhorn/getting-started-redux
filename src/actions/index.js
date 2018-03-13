// action creators
import { v4 } from 'node-uuid';
import * as api from '../api';
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: v4()
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter
});

// sync action creator - returns an object
const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  response,
  filter
});

// Now we are going to return a function that takes a dispatch callback
// now we can call dispatch at any time in the function
// this is a thunk - a function that returns another function
export const fetchTodos = filter => async dispatch => {
  dispatch(requestTodos(filter));
  const response = await api.fetchTodos(filter);
  dispatch(receiveTodos(filter, response));
};
