import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { admincodes,admincodesHasErrored, admincodesIsLoading } from './admincode';
import { itemdetails, itemdetailsHasErrored, itemdetailsIsLoading } from './itemdetails';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    admincodes,
    admincodesHasErrored,
    admincodesIsLoading,
    itemdetails,
    itemdetailsHasErrored,
    itemdetailsIsLoading
});