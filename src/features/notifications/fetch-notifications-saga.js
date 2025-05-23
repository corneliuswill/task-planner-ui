import { takeLatest, put } from 'redux-saga/effects';

import { getNotificationsUrl } from '../../utils/url-utils';
import { getOptions } from '../../utils/api-utils';
import { ACTIONS } from './actions';

function* fetchNotificationsSaga() {
    try {
        const notificationsResponse = yield fetch(getNotificationsUrl(), getOptions());
        const notifications = yield notificationsResponse.json();

        yield put({
            type: ACTIONS.GET_NOTIFICATIONS_SUCCESS,
            payload: notifications
        });
    } catch (error) {
        yield put({
            type: ACTIONS.GET_NOTIFICATIONS_FAILURE,
            payload: error.message
        });
    }
}

export function* watchFetchNotificationsSaga() {
    yield takeLatest(ACTIONS.GET_NOTIFICATIONS_REQUEST, fetchNotificationsSaga);
}
