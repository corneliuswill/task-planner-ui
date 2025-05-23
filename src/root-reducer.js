import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import { auth } from './features/auth'
import { errors } from './features/errors'
import { user } from './features/user'
import { tasks } from './features/task'
import { lists } from './features/lists'
import { filterReducer as filter } from './features/filter'
import { appReducer as app } from './app';
import { notifications } from './features/notifications'

export default combineReducers({
    auth,
    errors,
    filter,
    lists,
    loadingBar: loadingBarReducer,
    notifications,
    tasks,
    app,
    user,
})