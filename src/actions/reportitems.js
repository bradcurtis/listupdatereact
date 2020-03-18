import axios from "axios";

export function reportItemsHasErrored(bool) {
  return {
    type: "reportItems_HAS_ERRORED",
    hasErrored: bool
  };
}

export function reportItemsIsLoading(bool) {
  return {
    type: "reportItems_IS_LOADING",
    isLoading: bool
  };
}

export function reportItemsFetchDataSuccess(reportItems) {
  return {
    type: "reportItems_FETCH_DATA_SUCCESS",
    reportItems
  };
}

export function SelectedItemUpdate(selectedItem) {
  return {
    type: "SelectedItemUpdate",
    selectedItem
  };
}


export function reportItemsFetchData(url) {
  return dispatch => {
    dispatch(reportItemsIsLoading(true));
    console.log("called item fetch:" + url);

    // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
    axios
      .get(url)
      .then(response => {
        if (!response.status == 200) {
          throw Error(response.statusText);
        }
        dispatch(reportItemsIsLoading(false));

        return response;
      })
      .then(response => response.data.d)
      .then(reportItems => dispatch(reportItemsFetchDataSuccess(reportItems)))
      .catch(function(error) {
        console.log(error);
      });
  };
}

export function reportItemsPostIsLoading(bool) {
  return {
    type: "reportItemsPost_IS_LOADING",
    isLoading: bool
  };
}

export function reportItemsPostDataSuccess(bool) {
  return {
    type: "reportItems_POST_DATA_SUCCESS",
    sucess: bool
  };
}

export function reportItemsUpdateItem(selectedItem, updateItem) {
  return dispatch => {
    dispatch(reportItemsPostIsLoading(true));
    console.log("called item post" + JSON.stringify(updateItem));
    var axiosConfig = {
      headers: {
        Accept: "application/json;odata=verbose",
        "X-HTTP-Method": "MERGE",
        "If-Match": "*"
      }
    };

    // axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
    axios
      .post(
        "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster(" +
          selectedItem.Id +
          ")",
        updateItem,
        axiosConfig
      )
      .then(response => {
        if (!response.status == 200) {
          throw Error(response.statusText);
        }
        dispatch(reportItemsPostIsLoading(false));
        return response;
      })
      .then(response => response.data.d.results)
      .then(reportItems => dispatch(reportItemsPostDataSuccess(true)))
      .catch(function(error) {
        console.log(error);
      });
  };
}
