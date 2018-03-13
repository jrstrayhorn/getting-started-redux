// action creators
import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers/';
export const addTodo = text => async dispatch => {
  const response = await api.addTodo(text);
  dispatch({
    type: 'ADD_TODO_SUCCESS',
    response: normalize(response, schema.todo)
  });
};

export const toggleTodo = id => async dispatch => {
  const response = await api.toggleTodo(id);
  dispatch({
    type: 'TOGGLE_TODO_SUCCESS',
    response: normalize(response, schema.todo)
  });
};

// Now we are going to return a function that takes a dispatch callback
// now we can call dispatch at any time in the function
// this is a thunk - a function that returns another function
export const fetchTodos = filter => async (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });
  try {
    const response = await api.fetchTodos(filter);
    dispatch({
      type: 'FETCH_TODOS_SUCCESS',
      response: normalize(response, schema.arrayOfTodos),
      filter
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_TODOS_FAILURE',
      filter,
      message: error.message || 'Something went wrong.'
    });
  }
  /*
  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response));
    console.log('done in action');
  });
  */
};
