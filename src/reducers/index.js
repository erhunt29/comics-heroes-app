import { combineReducers } from 'redux';
import team from './team';
import navigation from './navigation';

const reducer = combineReducers({
    team,
    navigation,
});

export default reducer;
