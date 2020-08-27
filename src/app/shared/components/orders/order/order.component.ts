import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderId: string;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.ordersService.loadOrderData(this.orderId);
  }

  getOrderData(): Order {
    return this.ordersService.getOrderData();
  }

  getOrderType(): string {
    return this.localStorageService.get('role').toLowerCase();
  }

  getLogo(): string {
    const order = this.ordersService.getOrderData();

    if (order && order.logo) {
      const typedArray = new Uint8Array(order.logo.data);
      const typedArrayChars = String.fromCharCode.apply(null, typedArray);
      const base64String = btoa(typedArrayChars);

      return base64String;
    } else {
      return null;
    }
  }

  getOrderUserGravatarUrl(): string {
    return this.ordersService.getOrderUserGravatarUrl();
  }

  onSubmit(): void {
    this.ordersService.submitOrder(this.getOrderStatusData());
  }

  onCancel(): void {
    this.ordersService.cancelOrder(this.getOrderStatusData());
  }

  private getOrderStatusData(): any {
    return { id: this.orderId, email: this.getOrderData().email, role: this.getOrderType().toUpperCase() };
  }
}
