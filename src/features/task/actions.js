import { generateUID } from '../../utils/data-utils';
import { getTasksUrl } from '../../utils/url-utils';

/* ACTION TYPES */
// TODO: rename ACTIONS to ACTIONS for consistency
export const ACTIONS = {
    GET_TASKS__REQUEST: 'GET_TASKS__REQUEST',
    GET_TASKS__SUCCESS: 'GET_TASKS__SUCCESS',
    GET_TASKS__FAILURE: 'GET_TASKS__FAILURE',
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_COMPLETE_TASK: 'TOGGLE_COMPLETE_TASK',
    TOGGLE_IMPORTANT_TASK: 'TOGGLE_IMPORTANT_TASK',
    UPDATE_TASK_LIST: 'UPDATE_TASK_LIST'
}

/* ACTION CREATORS */
export function getTasksAction (token = 'ABCDE')  {
    return {
        types: [
            ACTIONS.GET_TASKS__REQUEST,
            ACTIONS.GET_TASKS__SUCCESS,
            ACTIONS.GET_TASKS__FAILURE
        ],
        promise: {
            url: getTasksUrl(),
            method: 'GET',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
}

export function addTaskAction (text, list) {
    //let lists = [];
    //lists = list ? lists.push(list) : [];

    return {
        type: ACTIONS.ADD_TASK,
        task: {
            id: generateUID(),
            text,
            isComplete: false,
            isImportant: false,
            lists: [list],
            timestamp: Date.now()
        }
    }
}

export function deleteTaskAction (id) {
    return {
        type: ACTIONS.DELETE_TASK,
        id,
    }
}

export function toggleCompleteTaskAction (id) {
    return {
        type: ACTIONS.TOGGLE_COMPLETE_TASK,
        id,
    }
}

export function toggleImportantTaskAction (id) {
    return {
        type: ACTIONS.TOGGLE_IMPORTANT_TASK,
        id,
    }
}

export function updateTaskList (taskId, listId) {
    return {
        type: ACTIONS.UPDATE_TASK_LIST,
        taskId,
        listId
    }
}