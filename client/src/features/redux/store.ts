import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    games:
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<T = void, ReturnType = void | Promise<void>> = (
  arg: T,
) => (dispatch: AppDispatch) => ReturnType;
