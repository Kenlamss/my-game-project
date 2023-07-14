import { GamesType } from "./games";

export type GamesActionType = 
| { type: 'INIT' }
| { type: 'ADD_GAME'; payload: GamesType }
| { type: 'EDIT_GAME'; payload: GamesType }
| { type: 'DELETE_GAME'; payload: GamesType['id'] }