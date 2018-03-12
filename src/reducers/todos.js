const todo = (state = {}, action) => {
  const { id, text } = action;
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id,
        text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;

// selector - returns a slice of state
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'active':
      return state.filter(t => !t.completed);
    case 'completed':
      return state.filter(t => t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};
