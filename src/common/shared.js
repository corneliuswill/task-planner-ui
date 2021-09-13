import { getInitialData } from './api/api-utils'
import { getTodosAction } from './actions/todos'
import { setAuthedUserAction } from '../actions/authed-user'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _getTodos } from  './api/api-utils'
import { getLists } from '../actions/lists';

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

export function loadInitialData() {
    console.log('loadInitialData');
    return (dispatch, getState) => {
      console.log('lists initial state', getState().lists)
      return dispatch(getLists()).then(() => {
        console.log('lists', getState().lists);
      });
    }
  }