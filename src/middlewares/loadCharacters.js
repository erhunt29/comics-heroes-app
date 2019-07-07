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

    //imitation fetch data
    setTimeout(
        () =>
            next({
                ...action,
                type: type + SUCCESS,
                payload:
                    payload === 'all'
                        ? characters['marvel'].concat(characters['dc'])
                        : characters[payload],
            }),
        0
    );
};
