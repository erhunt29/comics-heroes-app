import {
    LOAD_CHARACTERS,
    START,
    SUCCESS,
    ERROR,
} from '../action-creators/types';

const initialState = {
    characters: [],
    isCharactersLoading: false,
};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_CHARACTERS + START:
            return {
                ...defaultState,
                isCharactersLoading: true,
            };

        case LOAD_CHARACTERS + SUCCESS:
            return {
                ...defaultState,
                isCharactersLoading: false,
                characters: payload,
            };

        default:
            return defaultState;
    }
};
