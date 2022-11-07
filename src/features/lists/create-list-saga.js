import { takeLatest, put } from 'redux-saga/effects';

import { createListUrl } from '../../utils/url-utils';
import { getOptions } from '../../utils/api-utils';
import { ACTIONS } from './actions';

function* createListSaga() {
    try {
        const listResponse = yield fetch(createListUrl(), getOptions());
        const list = yield listResponse.json();

        yield put({
            type: ACTIONS.CREATE_LIST__SUCCESS,
            payload: list
        });
    } catch (error) {
        yield put({
            type: ACTIONS.CREATE_LIST__FAILURE,
            payload: error.message
        });
    }
}

export function* watchFetchListsSaga() {
    yield takeLatest(ACTIONS.CREATE_LIST__REQUEST, createListSaga);
}
