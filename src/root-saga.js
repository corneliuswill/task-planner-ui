import { all } from 'redux-saga/effects';

import { watchFetchListsSaga } from "./features/lists/fetch-lists-saga";
import { watchFetchTasksSaga } from "./features/task/fetch-tasks-saga";
import { watchFetchNotificationsSaga } from './features/notifications/fetch-notifications-saga';

export default function* rootSaga() {
    yield all([
        watchFetchListsSaga(),
        watchFetchTasksSaga(),
        watchFetchNotificationsSaga()
    ]);
}