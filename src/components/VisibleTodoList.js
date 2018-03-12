import { connect } from 'react-redux';
import TodoList from './TodoList';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

const mapStateToTodoListProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

// we are saying add onTodoClick to props as a method
// that maps to toggleTodo action creator
const VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, { onTodoClick: toggleTodo })(TodoList)
);

export default VisibleTodoList;
