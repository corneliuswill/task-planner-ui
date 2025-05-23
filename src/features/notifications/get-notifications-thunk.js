import { ACTIONS } from './actions';

export const getNotifications = (url, options) => async dispatch => {
    dispatch({
        type: ACTIONS.GET_NOTIFICATIONS_REQUEST
    });

    try {
        const notificationsResponse = await fetch(url, options);

        const notifications = await notificationsResponse.json();
        dispatch({
            type: ACTIONS.GET_NOTIFICATIONS_SUCCESS,
            payload: notifications
        });
    } catch(exc) {
        dispatch({
            type: ACTIONS.GET_NOTIFICATIONS_FAILURE,
            payload: exc
        });
    }
}
