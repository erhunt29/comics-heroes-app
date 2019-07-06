import { CHOOSE_TEAM } from './types';

export const chooseTeam = team => ({
    type: CHOOSE_TEAM,
    payload: team,
});
