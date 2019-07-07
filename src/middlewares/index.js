import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import history from '../history';
import loadCharacters from './loadCharacters';
import getGeolocation from './getGeolocation';

const enhancer = applyMiddleware(
    routerMiddleware(history),
    loadCharacters,
    getGeolocation
);

export default enhancer;
