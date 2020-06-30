import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpErrorMessage } from '../enums/http-error-message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService) {}

  isLoggedIn(): boolean {
    return !!this.localStorageService.get('logged_in');
  }

  isNavigatedRoleUrlCorrect(url: string): boolean {
    return url.includes(this.localStorageService.get('role').toLocaleLowerCase());
  }

  isAccessTokenExpiredError(error: any): boolean {
    return error.error.errorMessage === HttpErrorMessage.ExpiredAccessToken;
  }

  logOut(): void {
    this.localStorageService.clear();
  }
}
