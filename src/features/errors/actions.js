export const ACTIONS = {
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERRORS: 'CLEAR_ERRORS'
}

export const setError = (type, error, level) => {
    return {
        type: ACTIONS.SET_ERROR,
        hasError: true,
        payload: {
            type,
            message: error,
            level
        }
    };
}

export const clearErrors = () => {
    return {
        type: ACTIONS.CLEAR_ERRORS,
        hasError: false
    };
}