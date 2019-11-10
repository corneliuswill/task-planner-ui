//import { combineReducers } from "redux";

//import todos from './todos';

/*
export default combineReducers({
  [todos.constants.NAME]: todo.reducer
});
*/

import todos from './todos/reducer';
import goals from './goals/reducer';

export default function rootReducer(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  }
}
