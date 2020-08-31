import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService, private httpService: HttpService) {}

  login(username: string, password: string): Observable<any> {
    return this.httpService.login(username, password);
  }

  isLoggedIn(): boolean {
    return !!this.localStorageService.get('logged_in');
  }

  isNavigatedRoleUrlCorrect(url: string): boolean {
    return url.includes(this.localStorageService.get('role').toLocaleLowerCase());
  }
}
