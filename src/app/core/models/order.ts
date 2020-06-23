import { OrderStatus } from '../enums/order-staus';

export interface Order {
  id: number;
  destination: string;
  departure: string;
  distance: number;
  status: OrderStatus;
  spentTime?: number;
  cost?: number;
  userId: number;
  employerId: number;
}
