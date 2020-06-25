import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  setLoginLocalStorage(data: any): void {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('role', data.role);
    localStorage.setItem('email', data.email);
    localStorage.setItem('id', data.id);
    localStorage.setItem('logged_in', 'true');
  }

  get(itemName: string): string {
    return localStorage.getItem(itemName);
  }

  clear(): void {
    localStorage.clear();
  }
}
