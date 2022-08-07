import { getListsUrl, createListUrl, getUpdateListUrl } from '../../utils/url-utils';
import { HTTP_METHODS } from '../../common/constants';

/* ACTION TYPES */
export const ACTIONS = {
    GET_LISTS__REQUEST: 'GET_LISTS__REQUEST',
    GET_LISTS__SUCCESS: 'GET_LISTS__SUCCESS',
    GET_LISTS__FAILURE: 'GET_LISTS__FAILURE',
    SET_LISTS: 'SET_LISTS__REQUEST',
    CREATE_LIST__REQUEST: 'CREATE_LIST__REQUEST',
    CREATE_LIST__SUCCESS: 'CREATE_LIST__SUCCESS',
    CREATE_LIST__FAILURE: 'CREATE_LIST__FAILURE',
    UPDATE_LIST__REQUEST: 'UPDATE_LIST__REQUEST',
    UPDATE_LIST__SUCCESS: 'UPDATE_LIST__SUCCESS',
    UPDATE_LIST__FAILURE: 'UPDATE_LIST__FAILURE',

}

/* ACTION CREATORS */
export function getListsAction(token = 'ABCDE') {
    return {
        types: [
            ACTIONS.GET_LISTS__REQUEST,
            ACTIONS.GET_LISTS__SUCCESS,
            ACTIONS.GET_LISTS__FAILURE
        ],
        promise: {
            url: getListsUrl(),
            method: HTTP_METHODS.GET,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
}

export function createListAction(name = 'Untitled list', token = 'ABCDE') {
    return {
        types: [
            ACTIONS.CREATE_LIST__REQUEST,
            ACTIONS.CREATE_LIST__SUCCESS,
            ACTIONS.CREATE_LIST__FAILURE
        ],
        promise: {
            url: createListUrl(),
            method: HTTP_METHODS.POST,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: name })
        }
    }
}

export function updateListAction(id, name, token = 'ABCDE') {
    return {
        types: [
            ACTIONS.UPDATE_LIST__REQUEST,
            ACTIONS.UPDATE_LIST__SUCCESS,
            ACTIONS.UPDATE_LIST__FAILURE
        ],
        promise: {
            url: getUpdateListUrl(),
            method: HTTP_METHODS.PUT,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id: id, name: name })
        }
    }
}

export function setListsAction(lists) {
    return {
        type: ACTIONS.SET_LISTS,
        lists
    }
}

export const getLists = () => async dispatch => {
    dispatch({
        type: ACTIONS.GET_LISTS__REQUEST
    });

    try {
        const listResponse = await fetch(getListsUrl());

        const lists = await listResponse.json();
        dispatch({
            type: ACTIONS.GET_LISTS__SUCCESS,
            payload: lists
        });
    } catch(exc) {
        dispatch({
            type: ACTIONS.GET_LISTS__FAILURE,
            payload: exc
        });
    }
}

// export function getLists() {
//     return async dispatch => {
//         dispatch({
//             type: ACTIONS.GET_LISTS__REQUEST
//         });

//         try {
//             const listResponse = await fetch(getListsUrl());

//             const lists = await listResponse.json();
//             dispatch({
//                 type: ACTIONS.GET_LISTS__SUCCESS,
//                 payload: lists
//             });
//         } catch(exc) {
//             dispatch({
//                 type: ACTIONS.GET_LISTS__FAILURE,
//                 payload: exc
//             });
//         }
//     }
// }