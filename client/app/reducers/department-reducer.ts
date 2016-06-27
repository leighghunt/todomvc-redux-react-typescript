import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Department } from '../model';
import {
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
  EDIT_DEPARTMENT
} from '../actions/department-actions';

const initialState: Department[] = [
  <Department>{
    name: 'Department A',
    description: 'Department description A',
    id: 0
  }, <Department>{
    name: 'Department B',
    description: 'Department description B',
    id: 1
  }
];

export default handleActions<Department[]>({
  [ADD_DEPARTMENT]: (state: Department[], action: Action): Department[] => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.payload.name,
      description: action.payload.description
    }, ...state];
  },

  [DELETE_DEPARTMENT]: (state: Department[], action: Action): Department[] => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },

  [EDIT_DEPARTMENT]: (state: Department[], action: Action): Department[] => {
    return <Department[]>state.map(department =>
      department.id === action.payload.id
        ? assign(<Department>{}, department, {
          name: action.payload.name,
          description: action.payload.description
        })
        : department
    );
  }
}, initialState);
