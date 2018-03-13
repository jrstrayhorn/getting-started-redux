// action creators
import { v4 } from 'node-uuid';
import * as api from '../api';
import { getIsFetching } from '../reducers/';
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: v4()
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

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
      response,
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
