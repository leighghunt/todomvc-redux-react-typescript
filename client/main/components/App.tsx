import { IDispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  MainSection,
  DepartmentSection,
  model,
  addDepartment,
  addTodo,
  editDepartment,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteDepartment,
  deleteTodo
} from '../../app';

interface AppProps {
  todos: model.Todo[];
  departments: model.Department[];
  dispatch: IDispatch;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { todos, departments, dispatch } = this.props;

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSection
            todos={todos}
            editTodo={(t,s) => dispatch(editTodo(t, s))}
            deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
            completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
            clearCompleted={() => dispatch(clearCompleted())}
            completeAll={() => dispatch(completeAll())}/>
        <DepartmentSection
            departments={departments}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  departments: state.departments,
  todos: state.todos
});

export default connect(mapStateToProps)(App);
