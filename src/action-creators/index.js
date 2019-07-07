import {
    LOAD_CHARACTERS,
    CHANGE_VIEW,
    SEARCH,
    SORT,
    CHANGE_LANGUAGE,
    GET_GEOLOCATION,
} from './types';

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

export const changeLanguage = language => ({
    type: CHANGE_LANGUAGE,
    payload: language,
});

export const getGeolocation = () => ({
    type: GET_GEOLOCATION,
});
