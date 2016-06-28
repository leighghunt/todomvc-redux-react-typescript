import * as React from 'react';

import TextInput from './TextInput';

interface DepartmentHeaderProps {
  addDepartment: (name:string, description:string)=> any;
};

class DepartmentHeader extends React.Component<DepartmentHeaderProps, void> {
  handleSave(name: string, description: string) {
    if (name.length !== 0) {
      this.props.addDepartment(name, description);
    }
  }

  render() {
    return (
      <header className="header">
          <h2>Departments</h2>
          <TextInput
            newItem
            onSave={this.handleSave.bind(this)}
            placeholder="Department Name" />
      </header>
    );
  }
}

export default DepartmentHeader;
