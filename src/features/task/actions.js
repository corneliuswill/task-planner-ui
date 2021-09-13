import { generateUID } from '../../common/utils/data-utils';
import { getTasksUrl } from '../../common/utils/url-utils';

/* ACTION TYPES */
// TODO: rename ACTION_TYPES to ACTIONS for consistency
export const ACTION_TYPES = {
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
            ACTION_TYPES.GET_TASKS__REQUEST,
            ACTION_TYPES.GET_TASKS__SUCCESS,
            ACTION_TYPES.GET_TASKS__FAILURE
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
    return {
        type: ACTION_TYPES.ADD_TASK,
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
        type: ACTION_TYPES.DELETE_TASK,
        id,
    }
}

export function toggleCompleteTaskAction (id) {
    return {
        type: ACTION_TYPES.TOGGLE_COMPLETE_TASK,
        id,
    }
}

export function toggleImportantTaskAction (id) {
    return {
        type: ACTION_TYPES.TOGGLE_IMPORTANT_TASK,
        id,
    }
}

export function updateTaskList (taskId, listId) {
    return {
        type: ACTION_TYPES.UPDATE_TASK_LIST,
        taskId,
        listId
    }
}