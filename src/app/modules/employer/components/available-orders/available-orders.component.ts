import { Component, OnInit } from '@angular/core';
import { AvailabeOrdersService } from './availabe-orders.service';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-available-orders',
  templateUrl: './available-orders.component.html',
  styleUrls: ['./available-orders.component.scss']
})
export class AvailableOrdersComponent implements OnInit {

  constructor(public availableOrdersService: AvailabeOrdersService) { }

  ngOnInit() {
  }

  getAvailableOrdersData(): Order[] {
    return this.availableOrdersService.getAvailableOrdersData();
  }

  getAvailableOrdersColumns(): string[] {
    return this.availableOrdersService.getAvailableOrdersColumns();
  }

}
