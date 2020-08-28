import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from 'src/app/core/models/order';
import { Store } from '@ngrx/store';
import { LOAD_ORDERS_REQUEST } from '../../../ngrx/actions/orders.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../ngrx';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]> = this.store$.select((state: AppState) => state.orders.orders);

  constructor(private ordersService: OrdersService, private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(LOAD_ORDERS_REQUEST());
  }

  getOrdersColumns(): string[] {
    return this.ordersService.getOrdersColumns();
  }
}
