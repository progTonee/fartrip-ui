import { Injectable } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { HttpService } from 'src/app/core/services/http.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Gravatar } from 'src/app/core/enums/gravatar';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversDisplayedColumns: string[];
  driversData: Driver[];
  driverData: Driver;

  constructor(private httpService: HttpService) {
    this.driversDisplayedColumns = ['image', 'name', 'status', 'action'];
  }

  loadDriversData(): void {
    this.httpService.getEmployees()
      .subscribe(response => this.setDriversData(response));
  }

  loadDriverData(id: number): void {
    this.httpService.getEmployee(id)
      .subscribe(response => this.setDriverData(response));
  }

  getDriversData(): Driver[] {
    return this.driversData;
  }

  getDriverData(): Driver {
    return this.driverData;
  }

  getDriversDisplayedColumns(): string[] {
    return this.driversDisplayedColumns;
  }

  setDriversData(driversData: Driver[]): void {
    this.driversData = driversData;
  }

  setDriverData(driverData: Driver): void {
    this.driverData = driverData;
  }

  getProfileGravatarUrl(email: string): string {
    const md5 = new Md5();
    const md5Hash = md5.appendStr(email).end().toString();

    return `${Gravatar.Url}/${md5Hash}?d=mp`;
  }
}
