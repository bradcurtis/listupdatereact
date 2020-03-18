export function reportItemsHasErrored(state = false, action) {
  switch (action.type) {
    case "reportItems_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function reportItemsIsLoading(state = false, action) {
  switch (action.type) {
    case "reportItems_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function reportItemsPostHasErrored(state = false, action) {
  switch (action.type) {
    case "reportItems_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function reportItemsPostIsLoading(state = false, action) {
  switch (action.type) {
    case "reportItems_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function reportItems(state = [], action) {
  switch (action.type) {
    case "reportItems_FETCH_DATA_SUCCESS":
      return action.reportItems;

    default:
      return state;
  }
}

export function selectedItem(state = {}, action) {
  switch (action.type) {
    case "SelectedItemUpdate":
      return action.selectedItem;

    default:
      return state;
  }
}
