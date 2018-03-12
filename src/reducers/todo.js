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

export default todo;
