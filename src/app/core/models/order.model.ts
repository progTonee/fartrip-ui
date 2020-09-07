import { OrderStatusValue } from '../enum/order.enum';

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
  logo: any;
}
