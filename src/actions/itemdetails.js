import axios from 'axios';

export function itemdetailsHasErrored(bool) {
    return {
        type: 'itemdetails_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemdetailsIsLoading(bool) {
    return {
        type: 'itemdetails_IS_LOADING',
        isLoading: bool
    };
}

export function itemdetailsFetchDataSuccess(itemdetails) {
    return {
        type: 'itemdetails_FETCH_DATA_SUCCESS',
        itemdetails
    };
}

export function itemdetailsFetchData(url) {
    return (dispatch) => {
        dispatch(itemdetailsIsLoading(true));
         console.log("called item fetch:" + url)

        // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
        axios.get(url)
        .then(  (response) => {
            if (!response.status == 200) {
                throw Error(response.statusText);
            }
            dispatch(itemdetailsIsLoading(false));

            return response;
        })
        .then((response) => response.data.d.results)
        .then((itemdetails) => dispatch(itemdetailsFetchDataSuccess(itemdetails)))
        .catch (function(error){
            console.log(error);
        })


    };
}