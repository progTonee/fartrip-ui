import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUrl } from '../enums/http-url';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${HttpUrl.Token}?grant_type=password&username=${username}&password=${password}`, null);
  }

  refresh(): Observable<any> {
    return this.http.post(
      `${HttpUrl.Token}?grant_type=refresh_token&refresh_token=${this.localStorageService.get('refresh_token')}`,
      null
    );
  }

  signUpUser(body: any): Observable<any> {
    return this.http.post(HttpUrl.Users, body);
  }

  signUpEmployee(body: any): Observable<any> {
    return this.http.post(HttpUrl.Employees, body);
  }

  getEmployees(): Observable<any> {
    return this.http.get(HttpUrl.Employees);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${HttpUrl.Employees}/${id}`);
  }
}
