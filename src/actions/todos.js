import { generateUID } from '../utils/_DATA'

/* ACTION TYPES */
export const GET_TODOS__REQUEST = 'GET_TODOS__REQUEST';
export const GET_TODOS__SUCCESS = 'GET_TODOS__SUCCESS';
export const GET_TODOS__FAILURE = 'GET_TODOS__FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/* ACTION CREATORS */
export function getTodosAction ()  {
    return {
        type: GET_TODOS__REQUEST,
    }
}

export function addTodoAction (text) {
    return {
        type: ADD_TODO,
        todo: {
            id: generateUID(),
            text,
            completed: false,
            timestamp: Date.now()
        }
    }
}

export function deleteTodoAction (id) {
    return {
        type: DELETE_TODO,
        id,
    }
}

export function toggleTodoAction (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}
