import { Car } from './car';

export interface Driver {
  id: number;
  name: string;
  age: number;
  status: string;
  car: Car;
  rating: number;
  costPerKm: number;
}
