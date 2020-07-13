import { combineReducers } from 'redux'
import authedUser from './authed-user'
import user from './user'
import todos from './todos'
import visibilityFilter from './visibility-filter'
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
    loadingBar: loadingBarReducer,
    authedUser,
    todos,
    user,
    visibilityFilter,
})