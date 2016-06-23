import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Todo, IState, Department } from './model';
import {
  FETCH_DEPARTMENTS,
  ADD_TODO,
  ADD_DEPARTMENT,
  DELETE_TODO,
  DELETE_DEPARTMENT,
  EDIT_TODO,
  EDIT_DEPARTMENT,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './actions';

const initialState: IState = {
  todos:[<Todo>{
    text: 'Use Redux with TypeScript',
    completed: false,
    id: 0
  }],
  departments:[]
};

export default handleActions<IState>({
  [ADD_TODO]: (state: IState, action: Action): IState => {
    return <IState>assign({},
      state,
      {
        todos: [{
          id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: action.payload.completed,
          text: action.payload.text
        }, ...state.todos],
      });
  },

  [DELETE_TODO]: (state: IState, action: Action): IState => {
    return <IState>assign({},
      state,
      {
      todos: state.todos.filter(todo =>
      todo.id !== action.payload.id
    )});
  },

  [EDIT_TODO]: (state: IState, action: Action): IState => {
    return <IState>assign({},
      state,
      {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
          ? assign(<Todo>{}, todo, { text: action.payload.text })
          : todo
        )
      });
  },

  [COMPLETE_TODO]: (state: IState, action: Action): IState => {
    return <IState>assign({},
      state,
      {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ?
          assign({}, todo, { completed: !todo.completed }) :
          todo
        )
      });
  },

  [COMPLETE_ALL]: (state: IState, action: Action): IState => {
    const areAllMarked = state.todos.every(todo => todo.completed);
    return <IState>assign({},
      state,
      {
        todos: state.todos.map(todo => assign({}, todo, {
          completed: !areAllMarked
        }))
      });
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action): IState => {
    return <IState>assign({},
      state,
      {
        todos: state.todos.filter(todo => todo.completed === false)
      });
  }
}, initialState);
