import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Action } from '../index';
import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from '../actions/acccounts.actions';
import { SnackBarService } from '../../core/services/snack-bar.service';

@Injectable()
export class AccountsEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private snackbar: SnackBarService
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SIGNUP_REQUEST),
      mergeMap((action: Action) =>
        this.httpService.signUpAccount(action.payload.accountData).pipe(
          map(() => {
            this.handleSuccessfullyRegistration();
            return SIGNUP_SUCCESS();
          }),
          catchError((error: any) => {
            this.handleErrorRegistration(error);
            return SIGNUP_FAILED;
          })
        )
      )
    )
  );

  private handleSuccessfullyRegistration(): void {
    this.snackbar.show('You were successfully registered!');
  }

  private handleErrorRegistration(error: any): void {
    this.snackbar.show(error.error.message);
  }
}
