import { all } from 'redux-saga/effects';

import { watchFetchListsSaga } from "./fetchLists";
import { watchFetchTasksSaga } from "./fetchTasks";
import { watchFetchNotificationsSaga } from './fetchNotifications';

export default function* rootSaga() {
    yield all([
        watchFetchListsSaga(),
        watchFetchTasksSaga(),
        watchFetchNotificationsSaga()
    ]);
}