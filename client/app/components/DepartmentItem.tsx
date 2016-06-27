import * as React from 'react';
import * as classNames from 'classnames';

import { Department } from '../model';

interface DepartmentItemProps {
  department: Department;
  key?: any;
}
interface DepartmentItemState {
  editing: boolean;
};

class DepartmentItem extends React.Component<DepartmentItemProps, DepartmentItemState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  render() {
    const {department} = this.props;

    let element;
    element = (
      <div className="view">
      <label>
        {department.name}
      </label>
      <label>
        {department.description}
      </label>
      </div>
    );

    return (
      <li className={classNames({
      })}>
        {element}
      </li>
    );
  }
}

export default DepartmentItem;
