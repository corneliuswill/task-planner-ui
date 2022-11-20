export const ACTIONS = {
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERRORS: 'CLEAR_ERRORS'
}

export const ERROR_LEVEL = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
    CRITICAL: 'critical'
}

export const setError = (type, error, level = ERROR_LEVEL.ERROR) => {
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