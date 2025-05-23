import { takeLatest, put } from 'redux-saga/effects';

import { getTasksUrl } from '../../utils/url-utils';
import { getOptions } from '../../utils/api-utils';
import { ACTIONS } from './actions';

function* fetchTasksSaga() {
    try {
        const taskResponse = yield fetch(getTasksUrl(), getOptions());
        const tasks = yield taskResponse.json();

        yield put({
            type: ACTIONS.GET_TASKS__SUCCESS,
            payload: tasks
        });
    } catch (error) {
        yield put({
            type: ACTIONS.GET_TASKS__FAILURE,
            payload: error.message
        });
    }
}

export function* watchFetchTasksSaga() {
    yield takeLatest(ACTIONS.GET_TASKS__REQUEST, fetchTasksSaga);
}
