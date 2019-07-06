import { createStore, compose } from 'redux';
import reducer from '../reducers';
import enhancer from '../middlewares';

let composeEnhancers = compose;

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(reducer, composeEnhancers(enhancer));

export default store;
