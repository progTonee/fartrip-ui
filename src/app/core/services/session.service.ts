import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private localStorageService: LocalStorageService) {}

  isLoggedIn(): boolean {
    return !!this.localStorageService.get('logged_in');
  }
}
