import { createAction, props } from '@ngrx/store';
import {Order} from '../../core/models/order';
import {OrderStatusValue} from '../../core/enums/order';

export const LOAD_ORDERS_REQUEST = createAction('[Orders Page] Load Orders Request');
export const LOAD_ORDERS_SUCCESS = createAction(
  '[Orders Page] Load Orders Success',
  props<{ payload: { orders: Order[] } }>()
);
export const LOAD_ORDERS_FAILED = createAction('[Orders Page] Load Orders Failed');

export const LOAD_ORDER_REQUEST = createAction(
  '[Order Page] Load Order Request',
  props<{ payload: { id: string } }>()
);
export const LOAD_ORDER_SUCCESS = createAction(
  '[Order Page] Load Order Success',
  props<{ payload: { order: Order } }>()
);
export const LOAD_ORDER_FAILED = createAction('[Order Page] Load Order Failed');

export const SUBMIT_ORDER_REQUEST = createAction(
  '[Order Page] Submit Order Request',
  props<{ payload: { orderStatusData: any } }>()
);
export const SUBMIT_ORDER_SUCCESS = createAction(
  '[Order Page] Submit Order Success',
  props<{ payload: { orderStatus: OrderStatusValue } }>()
);
export const SUBMIT_ORDER_FAILED = createAction('[Order Page] Submit Order Failed');

export const CANCEL_ORDER_REQUEST = createAction(
  '[Order Page] Cancel Order Request',
  props<{ payload: { orderStatusData: any } }>()
);
export const CANCEL_ORDER_SUCCESS = createAction(
  '[Order Page] Cancel Order Success',
  props<{ payload: { orderStatus: OrderStatusValue } }>()
);
export const CANCEL_ORDER_FAILED = createAction('[Order Page] Cancel Order Failed');

export const CREATE_ORDER_REQUEST = createAction(
  '[Order Page] Create Order Request',
  props<{ payload: { orderData: any } }>()
);
export const CREATE_ORDER_SUCCESS = createAction('[Order Page] Create Order Success');
export const CREATE_ORDER_FAILED = createAction('[Order Page] Create Order Failed');
