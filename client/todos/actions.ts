import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Todo, Department } from './model';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const FETCH_DEPARTMENTS = 'FETCH_DEPARTMENTS';
export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT';
export const EDIT_DEPARTMENT = 'EDIT_DEPARTMENT';

const fetchDepartments = createAction<Todo>(
  FETCH_DEPARTMENTS
);

const addTodo = createAction<Todo>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

const addDepartment = createAction<Department>(
  ADD_DEPARTMENT,
  (name: string, description: string) => ({ name, description })
);

const deleteTodo = createAction<Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const deleteDepartment = createAction<Department>(
  DELETE_DEPARTMENT,
  (department: Department) => department
);

const editTodo = createAction<Todo>(
  EDIT_TODO,
  (todo: Todo, newText: string) => <Todo>assign(todo, {text: newText})
);

const editDepartment = createAction<Department>(
  EDIT_DEPARTMENT,
  (department: Department, newName: string, newDescription: string) => <Department>assign(department, {name: newName, description: newDescription})
);

const completeTodo = createAction<Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

const completeAll = createAction<void>(
  COMPLETE_ALL,
  () => {}
)

const clearCompleted = createAction<void>(
  CLEAR_COMPLETED,
  () => {}
);

export {
  fetchDepartments,
  addTodo,
  addDepartment,
  deleteTodo,
  deleteDepartment,
  editTodo,
  editDepartment,
  completeTodo,
  completeAll,
  clearCompleted
}
