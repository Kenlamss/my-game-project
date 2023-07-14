import { AnswersFormType } from "./answers";

export type AnswerActionType = 
| { type: 'INIT' }
| {
     type: 'ADD_POST'; payload: AnswersFormType
}