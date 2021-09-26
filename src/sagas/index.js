// import { call, put, takeEvery } from 'redux-saga/effects';
// import * as API from '../api/utils/api-utils';

// function* fetchNotifications(action) {
//     console.log('fetchNotifications called');
//     try {
//         const notifications = yield call(API.getNotifications, action.payload);
//         yield put({type: "GET_NOTIFICATIONS_SUCCESS", notifications: notifications});
//      } catch (e) {
//         yield put({type: "GET_NOTIFICATIONS_FAILURE", message: e.message});
//      }
// }

// function* rootSagas() {
//     yield takeEvery("GET_NOTIFICATIONS_REQUEST", fetchNotifications);
// }
/* eslint-disable */
import { put, takeEvery, all } from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* serviceCall() {
    yield delay(1000);
    yield put({ type: 'SERVICE_CALL' });
}

export function* watchServiceCall() {
    yield takeEvery('SERVICE_CALL', serviceCall);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchServiceCall()
    ])
}
/* eslint-enable */
