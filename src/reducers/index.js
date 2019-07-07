import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import team from './team';
import navigation from './navigation';
import lang from './lang';

const reducer = combineReducers({
    team,
    navigation,
    lang,
    router: connectRouter(history),
});

export default reducer;
