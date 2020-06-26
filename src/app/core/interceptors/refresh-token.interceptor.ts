import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class RefreshTokeInterceptor implements HttpInterceptor {

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      if (error.status === 401 && error.error.errorMessage === 'The access token is expired!') {
        this.httpService.refresh()
          .subscribe(response => this.localStorageService.set('access_token', response.access_token));
      }

      return throwError(error);
    }));
  }

  isAuthorizationRequest(url: string): boolean {
    return url.includes('users') || url.includes('employees');
  }

}
