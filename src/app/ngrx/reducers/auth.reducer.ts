import { createReducer, on } from '@ngrx/store';
import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST } from '../actions/auth.actions';
import { Action } from '..';
import { logActionMessage } from '../utils';

export interface AuthState {
  accountId: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  accountId: null,
  isLoggedIn: false
};

const actionHandlers = [
  on(LOGIN_REQUEST, (state: AuthState, action: Action) => {
    logActionMessage(action);
    return { ...state };
  }),
  on(LOGIN_SUCCESS, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { accountId: action.payload.accountId, isLoggedIn: true };
  }),
  on(LOGIN_FAILED, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOGOUT_REQUEST, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOGOUT_SUCCESS, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { accountId: null, isLoggedIn: false };
  })
];

export default createReducer(initialState, ...actionHandlers);
