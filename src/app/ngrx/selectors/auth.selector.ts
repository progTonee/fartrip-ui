import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuth = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state
);
