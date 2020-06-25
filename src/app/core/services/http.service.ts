import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUrl } from '../enums/http-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${HttpUrl.Login}?grant_type=password&username=${username}&password=${password}`, null, {
      headers: {
        Authorization: 'Basic'
      }
    });
  }

  signUpUser(body: any): Observable<any> {
    return this.http.post(HttpUrl.UserSignUp, body);
  }

  signUpEmployee(body: any): Observable<any> {
    return this.http.post(HttpUrl.EmployeeSignUp, body);
  }
}
