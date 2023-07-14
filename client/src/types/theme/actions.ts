import { ThemeType } from "./theme";

export type ThemeActionType = 
| { type: 'INIT' }
| {
    type: 'SET_THEME'; payload: ThemeType
}