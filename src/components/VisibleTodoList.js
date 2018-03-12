import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
  }
  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToTodoListProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// we are saying add onTodoClick to props as a method
// that maps to toggleTodo action creator
VisibleTodoList = withRouter(
  connect(mapStateToTodoListProps, { onTodoClick: toggleTodo })(VisibleTodoList)
);

export default VisibleTodoList;
