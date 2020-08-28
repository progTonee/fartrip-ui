import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { OrderStatusValue } from 'src/app/core/enums/order';
import { Gravatar } from 'src/app/core/enums/gravatar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  ordersColumns: string[];

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {
    this.ordersColumns = ['destination', 'departure', 'distance', 'spendTime', 'status', 'action'];
  }

  createOrder(orderData: any): Observable<any> {
    const data = {
      order: orderData.order,
      user: { accountId: this.localStorageService.get('id') },
      employee: orderData.employee
    };

    return this.httpService.createOrder(data);
  }

  loadOrdersData(): Observable<any> {
    return this.httpService.getOrders(
      this.localStorageService.get('id'),
      this.localStorageService.get('role').toLocaleLowerCase()
    );
  }

  loadOrderData(id: string): Observable<any> {
    return this.httpService.getOrder(
      id,
      this.localStorageService.get('id'),
      this.localStorageService.get('role').toLocaleLowerCase()
    );
  }

  submitOrder(orderStatusData: any): Observable<any> {
    return this.httpService.updateOrderStatus({
      ...orderStatusData,
      status: OrderStatusValue.InProgress
    });
  }

  cancelOrder(orderStatusData: any): Observable<any> {
    return this.httpService.updateOrderStatus({
      ...orderStatusData,
      status: OrderStatusValue.Canceled
    });
  }

  getOrdersColumns(): string[] {
    return this.ordersColumns;
  }

  getOrderUserGravatarUrl(email: string): string {
    if (email) {
      const md5 = new Md5();
      const hashedMd5 = md5.appendStr(email).end().toString();

      return `${Gravatar.Url}/${hashedMd5}?d=mp`;
    }

    return '';
  }

}
