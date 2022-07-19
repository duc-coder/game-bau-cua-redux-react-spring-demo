import { CHANGE_POINT_SCORE, PLAY_GAME, RESET_GAME } from "../Constant/Constant";

export const changePointScoreAction = (cardId, point) => ({
    type: CHANGE_POINT_SCORE,
    payload: cardId,
    value: point
});

export const resetGameAction = () => ({
    type: RESET_GAME,
});

export const playGameAction = () => ({
    type: PLAY_GAME,
});
