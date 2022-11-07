import { SYSTEM_LISTS } from '../../common/constants';
import { ACTIONS } from './actions';

const INITIAL_STATE = {
    allIds: [],
    byId: {},
    hasError: false,
    isLoading: false
};

export default function lists (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.GET_LISTS__REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.GET_LISTS__SUCCESS:
            return updateListsState(state, action);
        case ACTIONS.GET_LISTS__FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        case ACTIONS.CREATE_LIST__REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.CREATE_LIST__SUCCESS:
            return createListState(state, action);
        case ACTIONS.CREATE_LIST__FAILURE:
            return {
                isLoading: false,
                hasError: true
            }
        case ACTIONS.UPDATE_LIST__REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.UPDATE_LIST__SUCCESS:
            return updateListState(state, action);
        case ACTIONS.UPDATE_LIST__FAILURE:
            return {
                isLoading: false,
                hasError: true
            }
        case ACTIONS.SET_LISTS:
            return setList(state, action);
        default:
            return state
    }
}

function updateListsState(state, action) {
    let lists = action.payload;
    let byId = new Map(), allIds = [];

    lists.push(SYSTEM_LISTS.COMPLETED, SYSTEM_LISTS.ALL_TASKS);
    lists.unshift(SYSTEM_LISTS.IMPORTANT);

    lists.forEach(list => {
        byId[list.id] = list;
        allIds.push(list.id);
    });

    return {
        ...state,
        allIds,
        byId,
        isLoading: false
    }
}

function createListState(state, action) {
    let list = action.payload;

    return {
        ...state,
        allIds: [...state.allIds, list.id],
        byId: {
            ...state.byId,
            [list.id]: {
                ...list
            }
        },
        isLoading: false
    }
}

function updateListState(state, action) {
    return {
        ...state,
        byId: {
            ...state.byId,
            [action.payload.id]: {
                ...state.byId[action.payload.id],
                name: action.payload.name
            }
        }
    }
}

function setList(state, action) {
    let allIds = action.lists.map(list => list.id);

    return {
        ...state,
        allIds: [...state.allIds, allIds],
        byId: {
            ...action.lists
        }
    }
}