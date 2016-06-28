import * as React from 'react';

import TextInput from './TextInput';

interface HeaderProps {
  addTodo: (text:string)=> any;
};

class Header extends React.Component<HeaderProps, void> {
  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TextInput
            newItem
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
