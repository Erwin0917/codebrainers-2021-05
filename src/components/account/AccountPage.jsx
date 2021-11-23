import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody } from 'reactstrap';
import TodoList from 'components/account/todos/TodoList';
import { addTodo, VisibilityFilters } from 'components/account/ducks/actions';

const AccountPage = ({ todos, dispatch }) => {

  const addTodoClick = () => {
    dispatch(addTodo('some todo item'));
  };

  const onTodoClick = () => {

  };

  return (
    <Card>
      <CardBody>
        <Button onClick={ addTodoClick }>Add todo!</Button>
        <TodoList todos={ todos } onTodoClick={ onTodoClick } />
      </CardBody>
    </Card>
  );
};

AccountPage.propTypes = {};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

export default connect(mapStateToProps)(AccountPage);