import { Injectable } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { DriverStatus } from 'src/app/core/enums/user';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversDisplayedColumns: string[];
  driversData: Driver[];

  constructor() {
    this.driversData = [
      {
        id: 1,
        image: '#',
        name: 'Driver 1',
        age: 23,
        status: DriverStatus.Available,
        car: { model: 'Audi A6', notes: 'Very comfortable' },
        cost: 10,
        rating: 1.4
      },
      {
        id: 2,
        image: '#',
        name: 'Driver 2',
        age: 30,
        status: DriverStatus.InProgress,
        car: { model: 'BMW X6', notes: 'Very comfortable' },
        cost: 15,
        rating: 1.4
      },
      {
        id: 3,
        image: '#',
        name: 'Driver 3',
        age: 35,
        status: DriverStatus.NotWorking,
        car: { model: 'Reno logan', notes: 'Very comfortable' },
        cost: 5,
        rating: 1.4
      }
    ];
    this.driversDisplayedColumns = ['image', 'name', 'status', 'action'];
  }

  getDriversData(): Driver[] {
    return this.driversData;
  }

  getDriverData(id: number): Driver {
    return this.driversData.find(driver => driver.id === id);
  }

  getDriversDisplayedColumns(): string[] {
    return this.driversDisplayedColumns;
  }
}
