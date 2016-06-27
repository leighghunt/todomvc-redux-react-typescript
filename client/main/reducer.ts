import { combineReducers } from 'redux';

import { todos, departments } from '../app';

const rootReducer = combineReducers({
  todos,
  departments
});

export default rootReducer;
