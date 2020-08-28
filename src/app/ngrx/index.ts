import authReducer, { AuthState } from './reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import employeesReducer, { EmployeesState } from './reducers/employees.reducer';
import ordersReducer, { OrdersState } from './reducers/orders.reducer';

export interface Action {
  type: string;
  payload?: any;
}

export interface AppState {
  auth: AuthState;
  employees: EmployeesState;
  orders: OrdersState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  employees: employeesReducer,
  orders: ordersReducer
};
