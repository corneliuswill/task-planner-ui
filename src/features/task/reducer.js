import { ACTION_TYPES } from './actions';
import { SYSTEM_LISTS } from '../../common/constants';

const INITIAL_STATE = {
    allIds: [],
    byId: {},
    isLoading: false,
    hasError: false
};

export default function tasks (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_TASKS__REQUEST:
            return {
                ...state, 
                isLoading: true
            }
        case ACTION_TYPES.GET_TASKS__SUCCESS:
            return getTasksOnSuccess(state, action);
        case ACTION_TYPES.GET_TASKS__FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        case ACTION_TYPES.ADD_TASK:
            return addTask(state, action); //state.concat([action.task])
        case ACTION_TYPES.DELETE_TASK:
            return deleteTask(state, action); //state.filter((task) => task.id !== action.id)
        case ACTION_TYPES.TOGGLE_COMPLETE_TASK:
            return toggleComplete(state, action)
        case ACTION_TYPES.TOGGLE_IMPORTANT_TASK:
            return toggleImportant(state, action)
        case ACTION_TYPES.UPDATE_TASK_LIST:
            return updateTaskList(state, action)
        default:
            return state
    }
}

function getTasksOnSuccess(state, action) {
    let tasksList = action.payload;
    // TODO: experiment with using Map in place of Object
    let byId = new Map(), allIds = [];

    tasksList.forEach(task => {
        byId[task.id] = task;
        allIds.push(task.id);
    });

    return {
        ...state,
        allIds,
        byId,
        isLoading: false
    }
}

function addTask(state, action) {
    let task = action.task;

    return {
        ...state,
        allIds: [...state.allIds, task.id],
        byId: {
            ...state.byId,
            [task.id]: task
        }
    }
}

function deleteTask(state, action) {
    let taskId = action.id;
    let byId = state.byId;

    delete byId[taskId];

    return {
        ...state,
        allIds: state.allIds.filter((id) => id !== action.id),
        byId: {
            ...byId
        }
    }
}

function toggleComplete(state, action) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [action.id]: {
                ...state.byId[action.id], isComplete: !state.byId[action.id].isComplete
            }
        }
    }
}

function toggleImportant(state, action) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [action.id]: {
                ...state.byId[action.id], isImportant: !state.byId[action.id].isImportant
            }
        }
    }
}

function updateTaskList(state, action) {
    console.log('TaskId:ListId', action.taskId, action.listId);

    switch(action.listId) {
        case SYSTEM_LISTS.COMPLETED:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.taskId]: {
                        ...state.byId[action.taskId], isComplete: true
                    }
                }
            }
        case SYSTEM_LISTS.ALL_TASKS:
            return {
                ...state
            }
        case SYSTEM_LISTS.IMPORTANT:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.taskId]: {
                        ...state.byId[action.taskId], isImportant: true
                    }
                }
            }
        default:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.taskId]: {
                        ...state.byId[action.taskId], lists:[action.listId]
                    }
                }
            }
    }
}