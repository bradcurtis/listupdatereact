export function itemdetailsHasErrored(state = false, action) {
    switch (action.type) {
        case 'itemdetails_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemdetailsIsLoading(state = false, action) {
    switch (action.type) {
        case 'itemdetails_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function itemdetails(state = [], action) {
    switch (action.type) {
        case 'itemdetails_FETCH_DATA_SUCCESS':
            return action.itemdetails;

        default:
            return state;
    }
}
