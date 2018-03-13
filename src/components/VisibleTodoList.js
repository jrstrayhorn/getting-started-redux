import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers';

// container component - enhancing presentational component
class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// subscribing to the store via connect
// subscribing to react router via withRouter
VisibleTodoList = withRouter(
  connect(mapStateToProps, actions)(VisibleTodoList)
);

export default VisibleTodoList;
