import { Injectable } from '@angular/core';
import { Order } from 'src/app/core/models/order';

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
      },
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
      },
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
      },
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
