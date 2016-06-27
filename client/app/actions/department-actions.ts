import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Department } from '../model';

export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT';
export const EDIT_DEPARTMENT = 'EDIT_DEPARTMENT';

const addDepartment = createAction<Department>(
  ADD_DEPARTMENT,
  (name: string, description: string) => ({ name, description })
);

const deleteDepartment = createAction<Department>(
  DELETE_DEPARTMENT,
  (department: Department) => department
);

const editDepartment = createAction<Department>(
  EDIT_DEPARTMENT,
  (department: Department, name: string, description: string) => <Department>assign(department, {name: name, description: description})
);

export {
  addDepartment,
  deleteDepartment,
  editDepartment
}
