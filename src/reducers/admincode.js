export function admincodesHasErrored(state = false, action) {
    switch (action.type) {
        case 'admincodes_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function admincodesIsLoading(state = false, action) {
    switch (action.type) {
        case 'admincodes_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function admincodes(state = [], action) {
    switch (action.type) {
        case 'admincodes_FETCH_DATA_SUCCESS':
            return action.admincodes;

        default:
            return state;
    }
}