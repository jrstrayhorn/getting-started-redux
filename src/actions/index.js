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

// sync action creator - returns an object
const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  response,
  filter
});

// async action creator - returns a promise
export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response));
