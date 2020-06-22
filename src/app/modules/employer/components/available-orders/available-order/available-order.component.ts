import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-available-order',
  templateUrl: './available-order.component.html',
  styleUrls: ['./available-order.component.scss']
})
export class AvailableOrderComponent implements OnInit {
  @Input() data: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
