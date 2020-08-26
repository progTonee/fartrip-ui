import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/auth.actions';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { EMPTY } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private snackbarService: SnackBarService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN_REQUEST),
      mergeMap((action: any) =>
        this.authService.login(action.payload.username, action.payload.password).pipe(
          map((response: any) => {
            this.localStorageService.setLoginLocalStorage(response);
            this.router.navigateByUrl(response.role.toLowerCase());

            return LOGIN_SUCCESS({ payload: { accountId: response.id } });
          }),
          catchError(error => {
            this.snackbarService.show(error.error.message);

            return EMPTY;
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGOUT_REQUEST),
      map(() => {
        this.localStorageService.clear();

        return LOGOUT_SUCCESS();
      })
    )
  );

}
