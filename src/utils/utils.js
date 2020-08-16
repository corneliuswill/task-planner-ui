export function _getHashFromObjectArray(arr, id) {
    arr.reduce((map, obj) => {
        map[obj[id]] = obj
        return map
    },{})
}

export function _getHashFromObjectArray(arr, id) {
    Object.assign({}, ...arr.map(obj => ({[obj[id]]: obj})))
}