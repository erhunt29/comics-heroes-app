import { CHANGE_LANGUAGE, GET_GEOLOCATION } from '../action-creators/types';

const initialState = {
    defaultLang: 'EN',
    geolocationLang: null,
    selectLang: null,
};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_LANGUAGE:
            return {
                ...defaultState,
                selectLang: payload,
            };
        case GET_GEOLOCATION:
            return {
                ...defaultState,
                geolocationLang: payload,
            };

        default:
            return defaultState;
    }
};
