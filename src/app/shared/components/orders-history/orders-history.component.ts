import { Component, OnInit } from '@angular/core';
import { OrdersHistoryService } from './orders-history.service';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  constructor(private ordersHistoryService: OrdersHistoryService) {}

  ngOnInit(): void {}

  getOrdersHistoryData(): Order[] {
    return this.ordersHistoryService.getOrdersHistoryData();
  }

  loadMoreOrders(): void {
    this.ordersHistoryService.loadMoreOrders();
  }

}
