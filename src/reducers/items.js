export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function itemsPostHasErrored(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsPostIsLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return action.items;

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
