import { UserAnswersType } from "./userAnswers";

export type UserAnswersActionType = 
| { type: 'INIT' }
| {type: 'ADD_ANSWER'; payload: UserAnswersType}
| {type: 'DELETE_ANSWERS_FOR_GAME_ID'; payload: UserAnswersType['gameId']}
| {type: 'EDIT_STATUS_ANSWERS'; payload: UserAnswersType}  