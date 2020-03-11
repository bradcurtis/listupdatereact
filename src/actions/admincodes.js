import axios from 'axios';

export function admincodesHasErrored(bool) {
    return {
        type: 'admincodes_HAS_ERRORED',
        hasErrored: bool
    };
}

export function admincodesIsLoading(bool) {
    return {
        type: 'admincodes_IS_LOADING',
        isLoading: bool
    };
}

export function admincodesFetchDataSuccess(admincodes) {
    return {
        type: 'admincodes_FETCH_DATA_SUCCESS',
        admincodes
    };
}

export function admincodesFetchData(url) {
    return (dispatch) => {
        dispatch(admincodesIsLoading(true));
         console.log("called item fetch:" + url)

        // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
        axios.get(url)
        .then(  (response) => {
            if (!response.status == 200) {
                throw Error(response.statusText);
            }
            dispatch(admincodesIsLoading(false));

            return response;
        })
        .then((response) => response.data.d.results)
        .then((admincodes) => dispatch(admincodesFetchDataSuccess(admincodes)))
        .catch (function(error){
            console.log(error);
        })


    };
}

