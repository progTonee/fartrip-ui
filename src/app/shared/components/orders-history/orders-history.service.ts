import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersHistoryService {
  ordersHistoryData: IOrder[];

  constructor() {
    this.ordersHistoryData = [
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userName: 'User 1'
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userName: 'User 2'
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userName: 'User 3'
      }
    ];
  }

  geteOrdersHistoryData(): IOrder[] {
    return this.ordersHistoryData;
  }
}
