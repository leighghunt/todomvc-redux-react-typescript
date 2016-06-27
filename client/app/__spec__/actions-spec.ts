import { expect } from 'chai';

import * as todoActions from '../actions/todo-actions';

describe('todoActions', () => {
  it('creates new todo', () => {
    const { payload: todo } = todoActions.addTodo('hello');

    expect(todo.text).to.eql('hello');
  });

  it('deletes todo', () => {
    const { payload: todo } = todoActions.deleteTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eql(999);
  });

  it('edits todo', () => {
    const { payload: todo } = todoActions.editTodo({
      id: 999,
      text: 'hi',
      completed: false
    }, 'bye');
    expect(todo).to.eql({ id: 999, text: 'bye', completed: false});
  });

  it('completes todo', () => {
    const { payload: todo } = todoActions.completeTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eql(999);
  });
});
