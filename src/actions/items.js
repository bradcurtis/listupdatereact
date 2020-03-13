import axios from 'axios';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
         console.log("called item fetch:" + url)

        // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
        axios.get(url)
        .then(  (response) => {
            if (!response.status == 200) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));

            return response;
        })
        .then((response) => response.data.d.results)
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch (function(error){
            console.log(error);
        })


    };
}

export function itemdetailsPostIsLoading(bool) {
    return {
      type: "itemdetailsPost_IS_LOADING",
      isLoading: bool
    };
  }
  
  export function itemdetailsPostDataSuccess(bool) {
    return {
      type: "itemdetails_POST_DATA_SUCCESS",
      sucess: bool
    };
  }

export function itemdetailsUpdateItem() {
    return dispatch => {
      dispatch(itemdetailsPostIsLoading(true));
      console.log("called item post:" );
      var axiosConfig =  {
        headers:{
            "Accept": "application/json;odata=verbose",
            "X-HTTP-Method": "MERGE",
            "If-Match": "*"              
        }                     
    } 
  
      // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
      axios
        .post(
          "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/Tasks(1)",
          {            
            "Title": "TestUpdated"
          },axiosConfig
        )
        .then(response => {
          if (!response.status == 200) {
            throw Error(response.statusText);
          }
          dispatch(itemdetailsPostIsLoading(false));
          return response;
        })
        .then(response => response.data.d.results)
        .then(itemdetails => dispatch(itemdetailsPostDataSuccess(true)))
        .catch(function(error) {
          console.log(error);
        });
    };
  }
  