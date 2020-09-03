import { createAction, props } from '@ngrx/store';

export const LOGIN_REQUEST = createAction('[Login Page] Login Request', props<{ payload: { username: string, password: string } }>());
export const LOGIN_SUCCESS = createAction('[Login Page] Login Success', props<{ payload: { accountId: string } }>());
export const LOGIN_FAILED = createAction('[Login Page] Login Failed');

export const LOGOUT_REQUEST = createAction('[Account Page] Logout Request');
export const LOGOUT_SUCCESS = createAction('[Account Page] Logout Success');
export const LOGOUT_FAILED = createAction('[Account Page] Logout Failed');
