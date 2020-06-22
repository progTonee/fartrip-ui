import { DriverStatus } from '../enums/user';

export interface Driver {
  name: string;
  age: number;
  status: DriverStatus;
  car: string;
  cost: number;
  rating: number;
}
