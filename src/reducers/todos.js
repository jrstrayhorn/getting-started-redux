import { combineReducers } from 'redux';
import todo from './todo';

// a lookup table or database of todos
// key being the id
// value the actually todo
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

// selector - returns an array that is a slice of state
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(t => !t.completed);
    case 'completed':
      return allTodos.filter(t => t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
