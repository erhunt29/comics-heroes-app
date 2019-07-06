import { CHOOSE_TEAM } from '../action-creators/types';

const initialState = {};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHOOSE_TEAM:
            return {
                ...defaultState,
                team: payload,
            };

        default:
            return defaultState;
    }
};
