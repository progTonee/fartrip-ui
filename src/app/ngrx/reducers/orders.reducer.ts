import { createReducer, on } from '@ngrx/store';
import {
  CANCEL_ORDER_FAILED,
  CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS,
  LOAD_ORDER_FAILED,
  LOAD_ORDER_REQUEST, LOAD_ORDER_SUCCESS,
  LOAD_ORDERS_FAILED,
  LOAD_ORDERS_REQUEST,
  LOAD_ORDERS_SUCCESS, SUBMIT_ORDER_FAILED, SUBMIT_ORDER_REQUEST, SUBMIT_ORDER_SUCCESS
} from '../actions/orders.actions';
import { Action } from '../index';
import { logActionMessage } from '../utils';
import {Order} from '../../core/models/order.model';

export interface OrdersState {
  orders: Order[];
  viewableOrder: Order;
}

const initialState: OrdersState = {
  orders: [],
  viewableOrder: null
};

const ordersHandlers = [
  on(LOAD_ORDERS_REQUEST, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOAD_ORDERS_SUCCESS, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state, orders: action.payload.orders };
  }),
  on(LOAD_ORDERS_FAILED, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),

  on(LOAD_ORDER_REQUEST, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(LOAD_ORDER_SUCCESS, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state, viewableOrder: action.payload.order };
  }),
  on(LOAD_ORDER_FAILED, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),

  on(SUBMIT_ORDER_REQUEST, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(SUBMIT_ORDER_SUCCESS, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    const viewableOrder = { ...state.viewableOrder };

    viewableOrder.status = action.payload.orderStatus;

    return { ...state, viewableOrder };
  }),
  on(SUBMIT_ORDER_FAILED, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),

  on(CANCEL_ORDER_REQUEST, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  }),
  on(CANCEL_ORDER_SUCCESS, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    const viewableOrder = { ...state.viewableOrder };

    viewableOrder.status = action.payload.orderStatus;

    return { ...state, viewableOrder };
  }),
  on(CANCEL_ORDER_FAILED, (state: OrdersState, action: Action) => {
    logActionMessage(action);

    return { ...state };
  })
];

export default createReducer(initialState, ...ordersHandlers);
