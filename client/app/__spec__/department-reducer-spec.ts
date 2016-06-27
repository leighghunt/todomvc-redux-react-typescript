import { expect } from 'chai';

import departmentReducer from '../reducers/department-reducer';
import { Department } from '../model';

import {
  ADD_DEPARTMENT,
  DELETE_DEPARTMENT,
  EDIT_DEPARTMENT
} from '../actions/department-actions';

describe('department reducer', () => {
  it('handles add', () => {
    let state: Department[] = [{ id: 0, name: '', description: '' }];

    state = departmentReducer(state, {
      type: ADD_DEPARTMENT,
      payload: { name: 'hello', description: '' }
    });

    expect(state[0]).to.eql(
      { id: 1, name: 'hello', description: '' }
    );
  });

  it('handles delete', () => {
    let state: Department[] = [{ id: 1, name: '', description: '' }];

    state = departmentReducer(state, {
      type: DELETE_DEPARTMENT,
      payload: { id: 1 }
    });

    expect(state).to.eql([]);
  });

  it('handles edit', () => {
    let state: Department[] = [{ id: 1, name: '', description: '' }];

    state = departmentReducer(state, {
      type: EDIT_DEPARTMENT,
      payload: { id: 1, name: 'hello' , description: 'goodbye'}
    });

    expect(state[0]).to.eql(
      { id: 1, name: 'hello', description: 'goodbye' }
    );
  });

});
