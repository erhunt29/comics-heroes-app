import { CHANGE_VIEW, SEARCH } from '../action-creators/types';

const initialState = {
    view: 'gallery',
    filter: [],
    search: null,
};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_VIEW:
            return {
                ...defaultState,
                view: payload,
            };
        case SEARCH:
            return {
                ...defaultState,
                search: payload,
            };
        default:
            return defaultState;
    }
};
