import { applyMiddleware } from 'redux';
import loadCharacters from './loadCharacters';

const enhancer = applyMiddleware(loadCharacters);

export default enhancer;
