import { Injectable } from '@angular/core';
import { IDriver } from 'src/app/core/models/driver.model';
import { DriverStatus } from 'src/app/core/enums/user';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversData: IDriver[];

  constructor() {
    this.driversData = [
      {
        name: 'Driver 1',
        age: 23,
        status: DriverStatus.Available,
        car: 'Audi A6',
        cost: 10,
        rating: 1.4
      },
      {
        name: 'Driver 2',
        age: 30,
        status: DriverStatus.InProgress,
        car: 'BMW X6',
        cost: 15,
        rating: 1.4
      },
      {
        name: 'Driver 3',
        age: 35,
        status: DriverStatus.NotWorking,
        car: 'Reno logan',
        cost: 5,
        rating: 1.4
      }
    ];
  }

  getDriversData(): any[] {
    return this.driversData;
  }
}
