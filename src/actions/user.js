export const GET_USER = 'GET_USER'
export const UPDATE_USER_TODOS = 'UPDATE_USER_TODOS'

export function getUser (id) {
    return {
        type: GET_USER
    }
}

export function updateUserTodos({ id, author, todoId}) {
    return {
        type: UPDATE_USER_TODOS,
        id,
        author
    }
}