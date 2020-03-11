import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
    console.log("configure store was called")
    console.log(initialState)
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}