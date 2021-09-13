export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_FILTER = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function setVisibilityFilterAction(status) {
    return {
        type: SET_VISIBILITY_FILTER,
        visibility: status
    }
}
