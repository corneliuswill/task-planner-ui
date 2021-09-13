const DEFAULTS = {
    //url: '',
    params: '',
    timeout: 15000,
    accept: 'application/json'
}

const clientMiddleware = store => next => action => {
    let {promise, types, ...rest} = action;

    if (typeof action === "function") {
        return action(store.dispatch, store.getState);
    }

    if (promise) {
        const { url, ...promiseRest} = promise;
        const promiseProps = {...DEFAULTS, ...promiseRest};
        const [REQUEST, SUCCESS, FAILURE] = types;

        next ({
            ...rest,
            type: REQUEST,
        });

        // TODO: change to use axios for ajax requests
        return fetch(url, promiseProps)
            .then(res => res.json())
            .then(json => next({
                type: SUCCESS,
                payload: json
            }))
            .catch(error => next({
                type: FAILURE,
                payload: error
            }))
    } else {
        console.log('next state', store.getState())
        return next(action);
    }
}

export default clientMiddleware;

// export default function clientMiddleware() {
//     return ({dispatch, getState}) => {
//         return next => action => {
//             if (typeof action === "function") {
//                 console.log('action type', typeof action);
//                 return action(dispatch, getState);
//             }
//             console.log('action type', typeof action);
//             let {promise, types} = action;
//             let {url, ...rest} = promise;

//             if (promise) {
//                 const [REQUEST, SUCCESS, FAILURE] = types;
//                 next ({
//                     ...rest,
//                     type: REQUEST,
//                 });

//                 // TODO: change to use axios for ajax requests
//                 fetch(url, rest)
//                     .then(res => res.json())
//                     .then(json => next({
//                         type: SUCCESS,
//                         payload: json
//                     }))
//                     .catch(error => next({
//                         type: FAILURE,
//                         payload: error
//                     }))
//             } else {
//                 console.log('next state', getState())
//                 return next(action);
//             }
//         }
//      }
// }

