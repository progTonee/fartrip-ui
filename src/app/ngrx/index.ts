import authReducer, { AuthState } from './reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import employeesReducer, { EmployeesState } from './reducers/employees.reducer';

export interface Action {
  type: string;
  payload?: any;
}

export interface AppState {
  auth: AuthState;
  employees: EmployeesState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  employees: employeesReducer
};
