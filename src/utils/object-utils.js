export function getHashFromObjectArray(arr, id) {
    arr.reduce((map, obj) => {
        map[obj[id]] = obj
        return map
    },{})

    Object.assign({}, ...arr.map(obj => ({[obj[id]]: obj})))
}