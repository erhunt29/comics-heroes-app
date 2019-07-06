import {
    CHOOSE_TEAM,
    LOAD_CHARACTERS,
    CHANGE_VIEW,
    SEARCH,
    SORT,
} from './types';

export const chooseTeam = teamName => ({
    type: CHOOSE_TEAM,
    payload: teamName,
});

export const loadCharacters = teamName => ({
    type: LOAD_CHARACTERS,
    payload: teamName,
});

export const changeView = view => ({
    type: CHANGE_VIEW,
    payload: view,
});

export const search = string => ({
    type: SEARCH,
    payload: string,
});

export const sort = () => ({
    type: SORT,
});
