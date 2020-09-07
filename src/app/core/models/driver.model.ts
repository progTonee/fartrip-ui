import { Car } from './car.model';

export interface Driver {
  id: number;
  name: string;
  age: number;
  email: string;
  status: string;
  car: Car;
  rating: number;
  costPerKm: number;
}
