import { DriverStatus } from '../enums/user';
import { Car } from './car';

export interface Driver {
  id: number;
  image: string;
  name: string;
  age: number;
  status: DriverStatus;
  car: Car;
  cost: number;
  rating: number;
}
