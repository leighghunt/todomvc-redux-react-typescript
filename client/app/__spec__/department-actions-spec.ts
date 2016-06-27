import { expect } from 'chai';

import * as departmentActions from '../actions/department-actions';

describe('departmentActions', () => {
  it('creates new department', () => {
    const { payload: department } = departmentActions.addDepartment('A', 'B');

    expect(department.name).to.eql('A');
    expect(department.description).to.eql('B');
  });

  it('deletes department', () => {
    const { payload: department } = departmentActions.deleteDepartment({
      id: 999,
      name: '',
      description: ''
    });

    expect(department.id).to.eql(999);
  });

  it('edits department', () => {
    const { payload: department } = departmentActions.editDepartment({
      id: 999,
      name: 'A',
      description: 'B'
    }, 'C', 'D');
    expect(department).to.eql({ id: 999, name: 'C', description:'D'});
  });

});
