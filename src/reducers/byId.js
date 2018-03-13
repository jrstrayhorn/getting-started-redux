// a lookup table or database of todos
// key being the id
// value the actually todo
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }
  return state;
};

export default byId;

export const getTodo = (state, id) => state[id];
