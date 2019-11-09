import { combineReducers } from "redux";

import todos from './todos';

export default combineReducers({
  [todos.constants.NAME]: todo.reducer
});
