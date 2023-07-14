/* eslint-disable @typescript-eslint/default-param-last */
import type { GamesActionType } from "../../../../types/games/actions";
import type { GamesSliceState } from "../../../../types/games/games";

const initialState: GamesSliceState = {
    allQuestions: [],
    currentQuestion: null,
};

export default function gamesReducer(
    state: GamesSliceState = initialState,
    action: GamesActionType
): GamesSliceState {
    const { type } = action;
    switch (type) {
        case 'SET_GAME':
            return { ...state, allQuestions: action.payload };
        case 'CHECK_ANSWER':
            return { ...state, currentQuestion: action.payload };
        case "END_GAME":
            return { ...state, currentQuestion: null };
        default:
            return state;
    }
}