import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;

    if (this.isAuthorizationRequest(url)) {
      const token = this.localStorageService.get('access_token');
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(authReq);
    } else if (this.isTokenRequest(url)) {
      const { clientId, clientSecret } = environment;
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Basic ${btoa(`${clientId}:${clientSecret}`)}`)
      });

      return next.handle(authReq);
    }
  }

  isAuthorizationRequest(url: string): boolean {
    return url.includes('users') || url.includes('employees');
  }

  isTokenRequest(url: string): boolean {
    return url.includes('token');
  }
}
