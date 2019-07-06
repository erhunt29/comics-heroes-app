import { applyMiddleware } from 'redux';
import loadCharacters from './loadCharacters';
import getGeolocation from './getGeolocation';

const enhancer = applyMiddleware(loadCharacters, getGeolocation);

export default enhancer;
