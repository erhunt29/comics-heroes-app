import { GET_GEOLOCATION, START, SUCCESS } from '../action-creators/types';

export default store => next => action => {
    const { type } = action;

    if (type !== GET_GEOLOCATION) return next(action);

    fetch('http://ip-api.com/json/?lang=ru')
        .then(res => res.json())
        .then(res =>
            next({
                ...action,
                payload: res.countryCode,
            })
        );
};
