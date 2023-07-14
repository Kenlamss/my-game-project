import type { QuestionsAndAnswersType } from "./questionsAndAnswers";

export type QuestionsAndAnswersActionType =
    | { type: 'INIT' }
    | { type: 'SET_QUESTIONS_AND_ANSWERS'; payload: QuestionsAndAnswersType }
    | { type: 'DELETE_QUESTIONS_AND_ANSWERS'; payload: QuestionsAndAnswersType['id'] }
    | { type: 'DELETE_QUESTIONS_THEME'; payload: QuestionsAndAnswersType['themeId'] }