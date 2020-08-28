import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DriversService } from 'src/app/modules/user/components/drivers/drivers.service';
import {
  LOAD_EMPLOYEES_REQUEST,
  LOAD_EMPLOYEES_SUCCESS,
  LOAD_EMPLOYEES_FAILED,
  LOAD_EMPLOYEE_REQUEST,
  LOAD_EMPLOYEE_SUCCESS,
  LOAD_EMPLOYEE_FAILED
} from '../actions/employees.actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Driver } from 'src/app/core/models/driver.model';
import { Action } from '..';

@Injectable()
export class EmployeesEffects {

  constructor(private actions$: Actions, private driversService: DriversService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_EMPLOYEES_REQUEST),
      mergeMap(() =>
        this.driversService.loadDriversData().pipe(
          map((response: Driver[]) => LOAD_EMPLOYEES_SUCCESS({ payload: { employees: response } })),
          catchError(() => LOAD_EMPLOYEES_FAILED)
        )
      )
    )
  );

  loadEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_EMPLOYEE_REQUEST),
      mergeMap((action: Action) =>
        this.driversService.loadDriverData(action.payload.accountId).pipe(
          map(response => LOAD_EMPLOYEE_SUCCESS({ payload: { viewableEmployee: response } })),
          catchError(() => LOAD_EMPLOYEE_FAILED)
        )
      )
    )
  );
}
