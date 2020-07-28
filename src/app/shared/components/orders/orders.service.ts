import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Order } from 'src/app/core/models/order';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { OrderStatusValue } from 'src/app/core/enums/order';
import { Gravatar } from 'src/app/core/enums/gravatar';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  ordersData: Order[];
  orderData: Order;
  ordersColumns: string[];

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService
  ) {
    this.ordersColumns = ['destination', 'departure', 'distance', 'spendTime', 'status', 'action'];
  }

  createOrder(orderData: any): void {
    const data = {
      order: orderData.order,
      user: { accountId: this.localStorageService.get('id') },
      employee: orderData.employee
    };

    this.httpService.createOrder(data)
      .subscribe(() => this.snackBarService.show('The order was sent to the driver. Please, wait for the respond from him!', 3000));
  }

  loadOrdersData(): void {
    this.httpService.getOrders(this.localStorageService.get('id'), this.localStorageService.get('role').toLocaleLowerCase())
      .subscribe(response => this.setOrdersData(response));
  }

  loadOrderData(id: string): void {
    this.httpService.getOrder(id, this.localStorageService.get('id'), this.localStorageService.get('role').toLocaleLowerCase())
      .subscribe(response => this.setOrderData(response));
  }

  submitOrder(orderId: string): void {
    this.httpService.updateOrderStatus(orderId, OrderStatusValue.InProgress)
      .subscribe(() => this.setOrderData({ ...this.orderData, status: OrderStatusValue.InProgress }));
  }

  cancelOrder(orderId: string): void {
    this.httpService.updateOrderStatus(orderId, OrderStatusValue.Canceled)
      .subscribe(() => this.setOrderData({ ...this.orderData, status: OrderStatusValue.Canceled }));
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

  getOrderUserGravatarUrl(): string {
    if (this.orderData) {
      const md5 = new Md5();
      const hashedMd5 = md5.appendStr(this.orderData.email ).end().toString();

      return `${Gravatar.Url}/${hashedMd5}?d=mp`;
    }

    return '';
  }

}
