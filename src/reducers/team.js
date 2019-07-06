import {
    CHOOSE_TEAM,
    LOAD_CHARACTERS,
    START,
    SUCCESS,
    ERROR,
} from '../action-creators/types';

const initialState = {
    teamName: null,
    characters: [],
    isCharactersLoading: false,
};

export default (defaultState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHOOSE_TEAM:
            return {
                ...defaultState,
                teamName: payload,
            };

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
