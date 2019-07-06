import { CHANGE_VIEW, SEARCH, SORT } from '../action-creators/types';

const initialState = {
    view: 'gallery',
    filter: [],
    search: null,
    sort: null,
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

        case SORT:
            const { sort } = defaultState;
            const nextSort =
                sort === null ? 'up' : sort === 'up' ? 'down' : null;
            return {
                ...defaultState,
                sort: nextSort,
            };
        default:
            return defaultState;
    }
};
