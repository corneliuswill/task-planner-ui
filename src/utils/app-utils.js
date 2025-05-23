/**
 * Get data from local storge and return new Promise.
 *
 * @param {*} keyName The localStorage() key
 * @returns Promise
 */
export function loadfromLocalStorage(keyName) {
    return new Promise((resolve, reject) => {
        let stringValue= localStorage.getItem(keyName);
        if (stringValue) {
            resolve(stringValue)
        } else {
            reject(`Error getting ${keyName} key from local storage.`);
        }
    })
}

/**
 * Add an item to localStorage() array
 *
 * @param {String} keyName The localStorage() key
 * @param {*} value The localStorage() value
 * @returns Promise
 */
export function addToLocalStorageObjectArray(keyName, value) {
    let lists = localStorage.getItem(keyName);

    lists = lists ? JSON.parse(lists) : [];

    lists.push(value);

    localStorage.setItem(keyName, JSON.stringify(lists));

    return localStorage.getItem(keyName);
}
