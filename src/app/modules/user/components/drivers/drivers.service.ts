import { Injectable } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { HttpService } from 'src/app/core/services/http.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversDisplayedColumns: string[];
  driversData: Driver[];
  driverData: Driver;

  constructor(private httpService: HttpService, private authService: AuthService, private localStorageService: LocalStorageService) {
    this.driversDisplayedColumns = ['image', 'name', 'status', 'action'];
  }

  loadDriversData(): void {
    this.httpService.getEmployees()
      .subscribe(
        response => this.setDriversData(response),
        error => {
          if (this.authService.isAccessTokenExpiredError(error)) {
            return this.httpService.refresh()
              .subscribe(refreshTokenResponse => {
                this.localStorageService.set('access_token', refreshTokenResponse.access_token);

                this.httpService.getEmployees()
                  .subscribe(response => this.setDriversData(response));
              });
          }
        }
      );
  }

  loadDriverData(id: number): void {
    this.httpService.getEmployee(id)
      .subscribe(
        response => this.setDriverData(response),
        error => {
          if (this.authService.isAccessTokenExpiredError(error)) {
            return this.httpService.refresh()
              .subscribe(refreshTokenResponse => {
                this.localStorageService.set('access_token', refreshTokenResponse.access_token);

                this.httpService.getEmployee(id)
                  .subscribe(response => this.setDriversData(response));
              });
          }
        }
      );
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
}
