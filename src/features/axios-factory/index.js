import axios from 'axios';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Timeout': 1000,
    'Authorization': 'Bearer ABCDE'
};

export const getAxiosInstance = (config) => {
    const instance = axios.create({
        headers: DEFAULT_HEADERS,
        ...config
    });

    return instance;
};

export function axiosCall(instance, config) {
    return instance.request(config)
        .then(response => response)
        .catch(error => {
            if (error.response) {
                return error.response;
            } else if (error.request) {
                return error.request;
            } else {
                return error;
            }
        });
}

export function handleResponse(response, onSuccess, onFailure, catchAll) {
    switch(true) {
        case response.status === 200 || response.status === 201:
            onSuccess();
            break;
        case response.status >= 400 && response.status < 500:
            onFailure();
            break;
        case response >= 500:
            onFailure();
            break;
        default:
            catchAll();
    }
}

export async function asyncRequest(config, handlers = { onSuccess: () => {}, onFailure: () => {}, catchAll: () => {} }) {
    let axiosInstance = getAxiosInstance();

    let response = await axiosCall(axiosInstance, config);

    handleResponse(response, handlers.onSuccess, handlers.onFailure, handlers.catchAll);

    return response;
}