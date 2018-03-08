import { connect } from 'react-redux';
import TodoList from './TodoList';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapStateToTodoListProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || 'all')
});
const mapDispatchToTodoListProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});
const VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList)
);

export default VisibleTodoList;
