import { ACTIONS } from './actions';

export const getLists = (url, options) => async dispatch => {
    dispatch({
        type: ACTIONS.GET_LISTS__REQUEST
    });

    //TODO: update to use axios in place of fetch api
    try {
        const listResponse = await fetch(url, options);

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
