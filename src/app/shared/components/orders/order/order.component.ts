import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Store } from '@ngrx/store';
import { CANCEL_ORDER_REQUEST, LOAD_ORDER_REQUEST, SUBMIT_ORDER_REQUEST } from '../../../../ngrx/actions/orders.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../../ngrx';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order$: Observable<Order> = this.store$.select((state: AppState) => state.orders.viewableOrder);
  orderId: string;
  orderEmail: string;

  constructor(
    private store$: Store,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.store$.dispatch(LOAD_ORDER_REQUEST({ payload: { id: this.orderId } }));
    this.order$.subscribe(order => {
      this.orderEmail = order.email;
    });
  }

  getOrderType(): string {
    return this.localStorageService.get('role').toLowerCase();
  }

  getLogo(logo: any): string {
    if (logo) {
      const typedArray = new Uint8Array(logo.data);
      const typedArrayChars = String.fromCharCode.apply(null, typedArray);
      const base64String = btoa(typedArrayChars);

      return base64String;
    } else {
      return null;
    }
  }

  getOrderUserGravatarUrl(email: string): string {
    return this.ordersService.getOrderUserGravatarUrl(email);
  }

  onSubmit(): void {
    this.store$.dispatch(SUBMIT_ORDER_REQUEST({
      payload: { orderStatusData: this.getOrderStatusData(this.orderEmail) }
    }));
  }

  onCancel(): void {
    this.store$.dispatch(CANCEL_ORDER_REQUEST({
      payload: { orderStatusData: this.getOrderStatusData(this.orderEmail) }
    }));
  }

  private getOrderStatusData(email: string): any {
    return { id: this.orderId, email, role: this.getOrderType().toUpperCase() };
  }
}
