import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  @Input() type: string;
  @Input() data: Order;

  constructor() { }

  ngOnInit() {
  }

}
