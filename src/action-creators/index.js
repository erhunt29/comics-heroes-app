import { CHOOSE_TEAM, LOAD_CHARACTERS } from './types';

export const chooseTeam = teamName => ({
    type: CHOOSE_TEAM,
    payload: teamName,
});

export const loadCharacters = teamName => ({
    type: LOAD_CHARACTERS,
    payload: teamName,
});
