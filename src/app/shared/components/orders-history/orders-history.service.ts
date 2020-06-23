import { Injectable } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderStatus } from 'src/app/core/enums/order-staus';

@Injectable({
  providedIn: 'root'
})
export class OrdersHistoryService {
  amountOfDisplayedHistory = 5;
  ordersHistoryData: Order[];
  ordersHistoryDisplayedData: Order[];

  constructor() {
    this.ordersHistoryData = [
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userId: 1,
        employerId: 1,
        status: OrderStatus.New
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userId: 1,
        employerId: 2,
        status: OrderStatus.InProgress
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userId: 2,
        employerId: 1,
        status: OrderStatus.InProgress
      },
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userId: 1,
        employerId: 1,
        status: OrderStatus.InProgress
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userId: 1,
        employerId: 1,
        status: OrderStatus.New
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userId: 1,
        employerId: 1,
        status: OrderStatus.Canceled
      },
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userId: 1,
        employerId: 3,
        status: OrderStatus.Canceled
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userId: 1,
        employerId: 3,
        status: OrderStatus.New
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userId: 2,
        employerId: 4,
        status: OrderStatus.New
      },
      {
        destination: 'Moscow',
        spentTime: 60000,
        distance: 300.25,
        userId: 1,
        employerId: 5,
        status: OrderStatus.InProgress
      },
      {
        destination: 'Paris',
        spentTime: 600000,
        distance: 3000.25,
        userId: 2,
        employerId: 2,
        status: OrderStatus.Done
      },
      {
        destination: 'Poland',
        spentTime: 3500,
        distance: 200.25,
        userId: 2,
        employerId: 4,
        status: OrderStatus.Canceled
      }
    ];
    this.ordersHistoryDisplayedData = this.ordersHistoryData.slice(0, this.amountOfDisplayedHistory);
  }

  getOrdersHistoryData(): Order[] {
    return this.ordersHistoryDisplayedData;
  }

  loadMoreOrders(): void {
    const startSlicingIndex = this.ordersHistoryDisplayedData.length;
    const endSlicingIndex = startSlicingIndex + this.amountOfDisplayedHistory;

    this.ordersHistoryDisplayedData.push(...this.ordersHistoryData.slice(startSlicingIndex, endSlicingIndex));
  }
}
