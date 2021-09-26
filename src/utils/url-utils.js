import {
    DOMAIN_DEV,
    DOMAIN_TEST,
    API_VERSION,
    APP_NAME
} from '../common/constants';

export function getListsUrl() {
    if (process.env.NODE_ENV === 'test') {
        return DOMAIN_TEST + API_VERSION + APP_NAME + '/lists';
    }

    return DOMAIN_DEV + API_VERSION + APP_NAME + '/lists';
}

export function getTasksUrl() {
    if (process.env.NODE_ENV === 'test') {
        return DOMAIN_TEST + API_VERSION + APP_NAME + '/tasks';
    }

    return DOMAIN_DEV + API_VERSION + APP_NAME + '/tasks';
}

export function createListUrl() {
    if (process.env.NODE_ENV === 'test') {
        return DOMAIN_TEST + API_VERSION + APP_NAME + '/lists';
    }

    return DOMAIN_DEV + API_VERSION + APP_NAME + '/lists';
}

export function getNotificationsUrl() {
    if (process.env.NODE_ENV === 'test') {
        return DOMAIN_TEST + API_VERSION + APP_NAME + '/notifications';
    }

    return DOMAIN_DEV + API_VERSION + APP_NAME + '/notifications';
}

export function getUpdateListUrl() {
    if (process.env.NODE_ENV === 'test') {
        return DOMAIN_TEST + API_VERSION + APP_NAME + '/lists';
    }

    return DOMAIN_DEV + API_VERSION + APP_NAME + '/lists';
}