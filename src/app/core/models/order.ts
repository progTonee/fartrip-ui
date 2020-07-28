import { OrderStatusValue } from '../enums/order';

export interface Order {
  name: string;
  email: string;
  routePoints: number[][];
  id: number;
  destination: string;
  departure: string;
  distance: number;
  status: OrderStatusValue;
  spendTime?: number;
  cost?: number;
  userId: number;
  employerId: number;
}
