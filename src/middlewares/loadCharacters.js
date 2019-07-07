import {
    LOAD_CHARACTERS,
    START,
    SUCCESS,
    ERROR,
} from '../action-creators/types';
import characters from '../data';

export default store => next => action => {
    const { type, payload } = action;

    if (type !== LOAD_CHARACTERS) return next(action);

    next({
        ...action,
        type: type + START,
    });

    const { defaultLang, geolocationLang, selectLang } = store.getState().lang;

    const lang = selectLang || geolocationLang || defaultLang;

    fetch(`http://localhost:8080/${lang.toLowerCase()}/${payload}`)
        .then(res => res.json())
        .then(res =>
            next({
                ...action,
                type: type + SUCCESS,
                payload: res,
            })
        )
        .catch(error =>
            next({
                type: type + ERROR,
                payload: error,
            })
        );
};
