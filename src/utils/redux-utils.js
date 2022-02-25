import { createStore, combineReducers } from 'redux';
import reducer from '../root-reducer';

export function createTestStore() {
    const store = createStore(
      reducer
    );
    return store;
}