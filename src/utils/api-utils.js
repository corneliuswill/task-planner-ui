import axios from "axios";

export function getOptions(token) {
    return {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${token}`
        }
    };
}

export function fetchRequest(url, config) {
    return fetch(
        url,
        config || getOptions()
    );
}

export function axiosRequest(config) {
    return axios({
        ...config
    })
}