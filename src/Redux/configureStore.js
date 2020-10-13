import { createStore } from 'redux';
import combinedReducer from './combinedReducers.js';
import composeEnhancers from './composeEnhancers.js';

const configureStore = () => {
    return createStore(combinedReducer, composeEnhancers);
}

export default configureStore;