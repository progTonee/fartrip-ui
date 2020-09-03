import { createAction, props } from '@ngrx/store';

export const SIGNUP_REQUEST = createAction(
  '[Signup Page] Signup Request',
  props<{ payload: { accountData: any } }>()
);
export const SIGNUP_SUCCESS = createAction('[Signup Page] Signup Success');
export const SIGNUP_FAILED = createAction('[Signup Page] Signup Failed');
