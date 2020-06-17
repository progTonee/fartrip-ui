import { Component, OnInit } from '@angular/core';
import { OrdersHistoryService } from './orders-history.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  constructor(public ordersHistoryService: OrdersHistoryService) {}

  ngOnInit(): void {
  }

}
