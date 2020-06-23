import { Injectable } from '@angular/core';
import { OrderStatus } from 'src/app/core/enums/order-staus';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersHistoryService {
  ordersHistoryData: Order[];
  ordersHistoryColumns: string[];

  constructor() {
    this.ordersHistoryData = [
      {
        id: 1,
        destination: 'Moscow',
        departure: 'Gomel',
        spentTime: 60000,
        distance: 300.25,
        cost: 50,
        userId: 1,
        employerId: 1,
        status: OrderStatus.Done
      },
      {
        id: 2,
        destination: 'Paris',
        departure: 'Gomel',
        spentTime: 600000,
        distance: 3000.25,
        cost: 50,
        userId: 1,
        employerId: 2,
        status: OrderStatus.Done
      },
      {
        id: 3,
        destination: 'Poland',
        departure: 'Gomel',
        spentTime: 3500,
        distance: 200.25,
        cost: 50,
        userId: 2,
        employerId: 1,
        status: OrderStatus.Done
      },
      {
        id: 4,
        destination: 'Moscow',
        departure: 'Gomel',
        spentTime: 60000,
        distance: 300.25,
        cost: 50,
        userId: 1,
        employerId: 1,
        status: OrderStatus.New
      },
      {
        id: 5,
        destination: 'Paris',
        departure: 'Gomel',
        spentTime: 600000,
        distance: 3000.25,
        cost: 50,
        userId: 1,
        employerId: 1,
        status: OrderStatus.Canceled
      },
      {
        id: 6,
        destination: 'Poland',
        departure: 'Gomel',
        spentTime: 3500,
        distance: 200.25,
        cost: 50,
        userId: 1,
        employerId: 1,
        status: OrderStatus.Done
      },
      {
        id: 7,
        destination: 'Moscow',
        departure: 'Gomel',
        spentTime: 60000,
        distance: 300.25,
        cost: 33,
        userId: 1,
        employerId: 3,
        status: OrderStatus.New
      },
      {
        id: 8,
        destination: 'Paris',
        departure: 'Gomel',
        spentTime: 600000,
        distance: 3000.25,
        cost: 54,
        userId: 1,
        employerId: 3,
        status: OrderStatus.InProgress
      },
      {
        id: 9,
        destination: 'Poland',
        departure: 'Gomel',
        spentTime: 3500,
        distance: 200.25,
        cost: 30,
        userId: 2,
        employerId: 4,
        status: OrderStatus.InProgress
      },
      {
        id: 10,
        destination: 'Moscow',
        departure: 'Gomel',
        spentTime: 60000,
        distance: 300.25,
        cost: 55,
        userId: 1,
        employerId: 5,
        status: OrderStatus.InProgress
      },
      {
        id: 11,
        destination: 'Paris',
        departure: 'Gomel',
        spentTime: 600000,
        distance: 3000.25,
        cost: 25,
        userId: 2,
        employerId: 2,
        status: OrderStatus.Done
      },
      {
        id: 12,
        destination: 'Poland',
        departure: 'Gomel',
        spentTime: 3500,
        distance: 200.25,
        cost: 20,
        userId: 2,
        employerId: 4,
        status: OrderStatus.Canceled
      }
    ];
    this.ordersHistoryColumns = ['destination', 'departure', 'distance', 'spentTime', 'action'];
  }

  getOrdersHistoryData(type: string): Order[] {
    if (type === 'available-orders') {
      return this.ordersHistoryData.filter(order => order.status === OrderStatus.New || order.status === OrderStatus.InProgress);
    } else {
      return this.ordersHistoryData.filter(order => order.status !== OrderStatus.New);
    }
  }

  getOrderData(id: number): Order {
    return this.ordersHistoryData.find(order => order.id === id);
  }

  getOrdersHistoryColumns(): string[] {
    return this.ordersHistoryColumns;
  }
}
