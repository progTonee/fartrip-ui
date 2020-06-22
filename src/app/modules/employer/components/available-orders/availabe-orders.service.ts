import { Injectable } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class AvailabeOrdersService {
  availableOrdersData: Order[];

  constructor() {
    this.availableOrdersData = [
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userName: 'User 1 Available'
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userName: 'User 2 Available'
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userName: 'User 3 Available'
      }
    ];
  }

  getAvailableOrdersData(): any[] {
    return this.availableOrdersData;
  }
}
