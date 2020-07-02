import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.loadOrdersData();
  }

  getOrdersData(): Order[] {
    return this.ordersService.getOrdersData();
  }

  getOrdersColumns(): string[] {
    return this.ordersService.getOrdersColumns();
  }
}
