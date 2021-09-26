import { createStore, applyMiddleware } from 'redux';

export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function createDummyStore() {
    const store = createStore(() => [], {}, applyMiddleware());

    return store;
}