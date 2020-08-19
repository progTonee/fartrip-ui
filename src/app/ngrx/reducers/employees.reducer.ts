import { on, createReducer } from '@ngrx/store';
import {
  LOAD_EMPLOYEES_REQUEST,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_FAILED,
  LOAD_EMPLOYEE_REQUEST,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_FAILED
} from '../actions/employees.actions';
import { Action } from '..';
import { logActionMessage } from '../utils';
import { Driver } from 'src/app/core/models/driver.model';

export interface EmployeesState {
  employees: Driver[];
  viewableEmployee: Driver;
}

const initialState: EmployeesState = {
  employees: [],
  viewableEmployee: null
};

const employeesHandlers = [
  on(LOAD_EMPLOYEES_REQUEST, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOAD_EMPLOYEES_SUCCESS, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state, employees: action.payload.employees };
  }),
  on(LOAD_EMPLOYEES_FAILED, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOAD_EMPLOYEE_REQUEST, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOAD_EMPLOYEE_SUCCESS, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state, viewableEmployee: action.payload.viewableEmployee };
  }),
  on(LOAD_EMPLOYEE_FAILED, (state: EmployeesState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  })
];

export default createReducer(initialState, ...employeesHandlers);
