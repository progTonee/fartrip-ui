import { DriverStatus } from '../enums/user';

export interface IDriver {
  name: string;
  age: number;
  status: DriverStatus;
  car: string;
  cost: number;
  rating: number;
}
