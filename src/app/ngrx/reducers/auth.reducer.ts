import { createReducer, on } from '@ngrx/store';
import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST, LOGOUT_FAILED} from '../actions/auth.actions';
import { Action } from '..';
import { logActionMessage } from '../utils';
import {SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS} from '../actions/acccounts.actions';

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
  on(SIGNUP_REQUEST, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(SIGNUP_SUCCESS, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(SIGNUP_FAILED, (state: AuthState, action: Action) => {
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
  }),
  on(LOGOUT_FAILED, (state: AuthState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  })
];

export default createReducer(initialState, ...actionHandlers);
