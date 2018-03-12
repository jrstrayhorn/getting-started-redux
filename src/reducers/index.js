import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todoApp = combineReducers({
  todos
});

export default todoApp;

// the state passed in is entire state of application
// state used in fromTodos.getVisibleTodos is just todos from state
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
