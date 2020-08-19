import { Injectable } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { HttpService } from 'src/app/core/services/http.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Gravatar } from 'src/app/core/enums/gravatar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversDisplayedColumns: string[];

  constructor(private httpService: HttpService) {
    this.driversDisplayedColumns = ['image', 'name', 'status', 'action'];
  }

  loadDriversData(): Observable<Driver[]> {
    return this.httpService.getEmployees();
  }

  loadDriverData(id: number): Observable<any> {
    return this.httpService.getEmployee(id);
  }

  getDriversDisplayedColumns(): string[] {
    return this.driversDisplayedColumns;
  }

  getProfileGravatarUrl(email: string): string {
    const md5 = new Md5();
    const md5Hash = md5.appendStr(email ? email : '').end().toString();

    return `${Gravatar.Url}/${md5Hash}?d=mp`;
  }
}
