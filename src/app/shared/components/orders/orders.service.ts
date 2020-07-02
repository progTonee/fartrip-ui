import { Injectable } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  ordersData: Order[];
  orderData: Order;
  ordersColumns: string[];

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {
    this.ordersColumns = ['destination', 'departure', 'distance', 'spendTime', 'status', 'action'];
  }

  loadOrdersData(): void {
    this.httpService.getOrders(this.localStorageService.get('id'), this.localStorageService.get('role').toLocaleLowerCase())
      .subscribe(response => this.setOrdersData(response));
  }

  loadOrderData(id: string): void {
    this.httpService.getOrder(id, this.localStorageService.get('id'), this.localStorageService.get('role').toLocaleLowerCase())
      .subscribe(response => this.setOrderData(response));
  }

  setOrdersData(ordersData: Order[]): void {
    this.ordersData = ordersData;
  }

  setOrderData(orderData: Order): void {
    this.orderData = orderData;
  }

  getOrdersData(): Order[] {
    return this.ordersData;
  }

  getOrderData(): Order {
    return this.orderData;
  }

  getOrdersColumns(): string[] {
    return this.ordersColumns;
  }
}
