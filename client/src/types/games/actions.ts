import type { ThemeType } from "../theme/theme";
import type { UserAnswersType } from "../userAnswers/userAnswers";

export type GamesActionType =
    | { type: 'END_GAME' }
    | { type: 'SET_GAME'; payload: ThemeType[] }
    | { type: 'CHECK_ANSWER'; payload: UserAnswersType }