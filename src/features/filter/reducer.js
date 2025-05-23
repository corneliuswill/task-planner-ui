import { SET_VISIBILITY_FILTER, VISIBILITY_FILTER } from './actions'

const INITIAL_STATE = {
  visibility: VISIBILITY_FILTER.SHOW_ALL
}

export default function filterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return {
          ...state,
          visibility: action.payload
        }
      default:
        return state
    }
}