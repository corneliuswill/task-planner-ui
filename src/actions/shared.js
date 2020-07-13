import { getInitialData } from '../utils/api'
import { getTodosAction } from './todos'
import { setAuthedUserAction } from './authed-user'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _getTodos } from  '../utils/_DATA'

export function handleInitialData (id) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData(id)
            .then(({ todos }) => {
                dispatch(getTodosAction(todos))
                dispatch(setAuthedUserAction(null))
                dispatch(hideLoading())
            })
    }
}

export function getTodos (user = 'test') {
    return (dispatch) => {
        dispatch(showLoading())
        return _getTodos(user)
            .then(({ todos }) => {
                console.log('shared.js', todos)
                dispatch(getTodosAction(todos))
                dispatch(hideLoading())
            })
    }
}