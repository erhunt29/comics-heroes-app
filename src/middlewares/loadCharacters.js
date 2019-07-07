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

    fetch(
        `https://comics-heroes-api.herokuapp.com/${lang.toLowerCase()}/${payload}`
    )
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            } else {
                const error = new Error(res.statusText);
                error.response = res;
                throw error;
            }
        })
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
