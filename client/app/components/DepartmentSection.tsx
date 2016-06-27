import * as React from 'react';

import { Department } from '../model';
import DepartmentItem from './DepartmentItem';
import Footer from './Footer';

interface DepartmentSectionProps {
  departments: Department[];
};
interface DepartmentSectionState {
  filter: string;
};

class DepartmentSection extends React.Component<DepartmentSectionProps, DepartmentSectionState> {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const { departments } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {departments.map(department =>
            <DepartmentItem
              key={department.id}
              department={department}/>
          )}
        </ul>
      </section>
    );
  }
}

export default DepartmentSection;
