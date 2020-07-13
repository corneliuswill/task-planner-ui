import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/visibility-filter'

export default function reducer(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
}