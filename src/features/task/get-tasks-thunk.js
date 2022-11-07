import { ACTIONS } from './actions';

export function getTasks(url, options) {
    return async dispatch => {
        dispatch({
            type: ACTIONS.GET_TASKS__REQUEST
        });

        try {
            const taskResponse = await fetch(url, options);

            const tasks = await taskResponse.json();
            dispatch({
                type: ACTIONS.GET_TASKS__SUCCESS,
                payload: tasks
            });
        } catch(exc) {
            dispatch({
                type: ACTIONS.GET_TASKS__FAILURE,
                payload: exc
            });
        }
    }
}