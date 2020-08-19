import { createAction, props } from '@ngrx/store';
import { Driver } from 'src/app/core/models/driver.model';

export const LOAD_EMPLOYEES_REQUEST = createAction('[Employees Page] Load Employees Request');
export const LOAD_EMPLOYEES_SUCCESS = createAction(
  '[Employees Page] Load Employees Success',
  props<{ payload: { employees: Driver[] } }>()
);
export const LOAD_EMPLOYEES_FAILED = createAction('[Employee Page] Load Employee Failed');

export const LOAD_EMPLOYEE_REQUEST = createAction(
  '[Employee Page] Load Employee Request',
  props<{ payload: { accountId: number } }>()
);
export const LOAD_EMPLOYEE_SUCCESS = createAction(
  '[Employee Page] Load Employee Success',
  props<{ payload: { viewableEmployee: Driver } }>()
);
export const LOAD_EMPLOYEE_FAILED = createAction('[Employee Page] Load Employee Failed');
