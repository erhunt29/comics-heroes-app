import { CHANGE_VIEW } from '../action-creators/types';

const initialState = {
    view: 'gallery',
    filter: [],
    search: [],
};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_VIEW:
            return {
                ...defaultState,
                view: payload,
            };
        default:
            return defaultState;
    }
};
