import { getNotificationsUrl } from '../../utils/url-utils';

export const ACTIONS = {
    GET_NOTIFICATIONS_REQUEST: 'GET_NOTIFICATIONS_REQUEST',
    GET_NOTIFICATIONS_SUCCESS: 'GET_NOTIFICATIONS_SUCCESS',
    GET_NOTIFICATIONS_FAILURE: 'GET_NOTIFICATIONS_FAILURE',
    SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
    HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS'
}

export function getNotificationsAction(token = 'ABCDE') {
    return {
        types: [
            ACTIONS.GET_NOTIFICATIONS_REQUEST,
            ACTIONS.GET_NOTIFICATIONS_SUCCESS,
            ACTIONS.GET_NOTIFICATIONS_FAILURE
        ],
        promise: {
            url: getNotificationsUrl(),
            method: 'GET',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
}

export function showNotification(type, message) {
    return {
        type: ACTIONS.SHOW_NOTIFICATION,
        notification: {
            type,
            message
        }
    }
}

export function hideNotification(index) {
    return {
        type: ACTIONS.HIDE_NOTIFICATION,
        notification: {
            index
        }
    }
}

export function clearNotification() {
    return {
        type: ACTIONS.CLEAR_NOTIFICATIONS,
    }
}