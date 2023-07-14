import type { QuestionsAndAnswersType } from "../questionsAndAnswers/questionsAndAnswers";
import type { ThemeType } from "../theme/theme";
import type { UserAnswersType } from "../userAnswers/userAnswers";

export type GamesType = {
    id: number;
    userId: number;
    finished: boolean;
}

export type ObjectFromModal = {
    id: QuestionsAndAnswersType['id']
    usersAnswer: string
}

export type GamesSliceState = {
    allQuestions: ThemeType[]
    currentQuestion: UserAnswersType | null
}