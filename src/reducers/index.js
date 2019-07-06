import { combineReducers } from 'redux';
import team from './team';
import navigation from './navigation';
import lang from './lang';

const reducer = combineReducers({
    team,
    navigation,
    lang,
});

export default reducer;
