import { combineReducers } from 'redux';
import { items, selectedItem,itemsHasErrored, itemsIsLoading } from './items';
import { admincodes,admincodesHasErrored, admincodesIsLoading } from './admincode';
import { itemdetails, itemdetailsHasErrored, itemdetailsIsLoading } from './itemdetails';

export default combineReducers({
    items,
    selectedItem,
    itemsHasErrored,
    itemsIsLoading,
    admincodes,
    admincodesHasErrored,
    admincodesIsLoading,
    itemdetails,
    itemdetailsHasErrored,
    itemdetailsIsLoading
});