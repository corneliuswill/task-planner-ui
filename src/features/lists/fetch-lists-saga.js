import { takeLatest, put } from 'redux-saga/effects';

import { getListsUrl } from '../../utils/url-utils';
import { getOptions } from '../../utils/api-utils';
import { ACTIONS } from './actions';

function* fetchListsSaga() {
    try {
        const listResponse = yield fetch(getListsUrl(), getOptions());
        const lists = yield listResponse.json();

        yield put({
            type: ACTIONS.GET_LISTS__SUCCESS,
            payload: lists
        });
    } catch (error) {
        yield put({
            type: ACTIONS.GET_LISTS__FAILURE,
            payload: error.message
        });
    }
}

export function* watchFetchListsSaga() {
    yield takeLatest(ACTIONS.GET_LISTS__REQUEST, fetchListsSaga);
}
