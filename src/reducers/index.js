import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { itemdetails, itemdetailsHasErrored, itemdetailsIsLoading } from './itemdetails';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    itemdetails,
    itemdetailsHasErrored,
    itemdetailsIsLoading
});