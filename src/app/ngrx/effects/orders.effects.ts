import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  CANCEL_ORDER_FAILED,
  CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CREATE_ORDER_FAILED, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
  LOAD_ORDER_FAILED,
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDERS_FAILED,
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS, SUBMIT_ORDER_FAILED,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS
} from '../actions/orders.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Action} from '..';
import {OrdersService} from '../../shared/components/orders/orders.service';
import {Order} from '../../core/models/order';
import {OrderStatusValue} from '../../core/enums/order';
import {SnackBarService} from '../../core/services/snack-bar.service';

@Injectable()
export class OrdersEffects {

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
    private snackBarService: SnackBarService
  ) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ORDERS_REQUEST),
      mergeMap(() =>
        this.ordersService.loadOrdersData().pipe(
          map((response: Order[]) => LOAD_ORDERS_SUCCESS({ payload: { orders: response } })),
          catchError(() => LOAD_ORDERS_FAILED)
        )
      )
    )
  );

  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ORDER_REQUEST),
      mergeMap((action: Action) =>
        this.ordersService.loadOrderData(action.payload.id).pipe(
          map((response: Order) => LOAD_ORDER_SUCCESS({ payload: { order: response } })),
          catchError(() => LOAD_ORDER_FAILED)
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_ORDER_REQUEST),
      mergeMap((action: Action) =>
        this.ordersService.createOrder((action.payload.orderData)).pipe(
          map(() => {
            this.snackBarService.show('The order was sent to the driver. Please, wait for the respond from him!', 3000);

            return CREATE_ORDER_SUCCESS();
          }),
          catchError(() => CREATE_ORDER_FAILED)
        )
      )
    )
  );

  submitOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SUBMIT_ORDER_REQUEST),
      mergeMap((action: Action) =>
        this.ordersService.submitOrder(action.payload.orderStatusData).pipe(
          map(() => SUBMIT_ORDER_SUCCESS({ payload: { orderStatus: OrderStatusValue.InProgress } })),
          catchError(() => SUBMIT_ORDER_FAILED)
        )
      )
    )
  );

  cancelOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CANCEL_ORDER_REQUEST),
      mergeMap((action: Action) =>
        this.ordersService.cancelOrder(action.payload.orderStatusData).pipe(
          map(() => CANCEL_ORDER_SUCCESS({ payload: { orderStatus: OrderStatusValue.Canceled } })),
          catchError(() => CANCEL_ORDER_FAILED)
        )
      )
    )
  );

}
