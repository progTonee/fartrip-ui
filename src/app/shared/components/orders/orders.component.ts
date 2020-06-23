import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  type: string;

  constructor(private ordersService: OrdersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.url[0].path;
  }

  getOrdersData(): Order[] {
    return this.ordersService.getOrdersData(this.type);
  }

  getOrdersColumns(): string[] {
    return this.ordersService.getOrdersColumns();
  }
}
