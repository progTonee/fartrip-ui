import { Component, OnInit } from '@angular/core';
import { OrdersHistoryService } from './orders-history.service';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {
  type: string;

  constructor(private ordersHistoryService: OrdersHistoryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.url[0].path;
  }

  getOrdersHistoryData(): Order[] {
    return this.ordersHistoryService.getOrdersHistoryData(this.type);
  }

  getOrdersHistoryColumns(): string[] {
    return this.ordersHistoryService.getOrdersHistoryColumns();
  }

}
