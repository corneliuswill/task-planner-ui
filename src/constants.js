// TODO: move constant near related files
export const SYSTEM_LISTS = {
    COMPLETED: {
        id: 1000,
        type: "SYSTEM",
        name: "Completed",
        isVisible: true
    },
    ALL_TASKS: {
        id: 1001,
        type: "SYSTEM",
        name: "All Tasks",
        isVisible: true
    },
    IMPORTANT: {
        id: 1002,
        type: "SYSTEM",
        name: "Important",
        isVisible: true
    }
}

export const LIST_TYPE = {
    SYSTEM: 'SYSTEM',
    CUSTOM: 'CUSTOM'
}

export const DOMAIN_DEV = 'http://localhost:2300';
export const DOMAIN_TEST = 'http://localhost:8080';
export const DOMAIN_PROD = '';
export const API_VERSION = '/v1';
export const APP_NAME = '/task-planner';


export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
export const HEADERS = {
    accept: 'application/json',
    timeout: 15000
}

export const COUNTER = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

export const UNITITLED_LIST = 'Untitled list';