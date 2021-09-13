import { ACTIONS } from './actions';

const INITIAL_STATE = {
    allIds: [],
    byId: {},
    isLoading: false,
    hasError: false
}

export default function notifications(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.GET_NOTIFICATIONS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.GET_NOTIFICATIONS_SUCCESS:
            return getNotificationSuccess(state, action);
        case ACTIONS.GET_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        case ACTIONS.SHOW_NOTIFICATION:
            return [
                ...state,
                {
                    type: action.notification.type,
                    message: action.notification.message,
                    isVisible: true
                }
            ]
        case ACTIONS.HIDE_NOTIFICATION: {
            const newArray = [...state];

            newArray[action.notification.index].isVisible = false;

            return newArray;
        }
        case ACTIONS.CLEAR_NOTIFICATIONS:
            return []
        default:
            return state
    }
}

function getNotificationSuccess(state, action) {
    let notifications = action.payload;
    let byId = new Map(), allIds = [];

    notifications.forEach(list => {
        byId[list.id] = list;
        allIds.push(list.id);
    });

    return {
        ...state,
        allIds,
        byId,
        isLoading: false,
    }
}