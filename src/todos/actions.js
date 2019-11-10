import * as actions from './actionTypes';

export function fetchToDos ()  {
    return {
        type: actions.FETCH_TODOS,
    }
}

export function addTodoAction (todo) {
    return {
        type: actions.ADD_TODO,
        todo,
    }
}

export function removeTodoAction (id) {
    return {
        type: actions.REMOVE_TODO,
        id,
    }
}

export function toggleTodoAction (id) {
    return {
        type: actions.TOGGLE_TODO,
        id,
    }
}