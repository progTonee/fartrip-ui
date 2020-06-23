import { OrderStatus } from '../enums/order-staus';

export interface Order {
  destination: string;
  distance: number;
  status: OrderStatus;
  spentTime?: number;
  cost?: number;
  userId: number;
  employerId: number;
}
