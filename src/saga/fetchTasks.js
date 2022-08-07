import { takeLatest, put } from 'redux-saga/effects';

import { getTasksUrl } from '../utils/url-utils';
import { getOptions } from '../utils/api-utils';
import { ACTION_TYPES } from '../features/task/actions';

function* fetchTasksSaga() {
    try {
        const taskResponse = yield fetch(getTasksUrl(), getOptions());
        const tasks = yield taskResponse.json();

        yield put({
            type: ACTION_TYPES.GET_TASKS__SUCCESS,
            payload: tasks
        });
    } catch (error) {
        yield put({
            type: ACTION_TYPES.GET_TASKS__FAILURE,
            payload: error.message
        });
    }
}

export function* watchFetchTasksSaga() {
    yield takeLatest(ACTION_TYPES.GET_TASKS__REQUEST, fetchTasksSaga);
}
