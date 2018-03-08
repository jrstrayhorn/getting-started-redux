import React from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'} />
    <Footer />
  </div>
);

export default App;
