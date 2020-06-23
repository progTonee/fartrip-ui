import { Injectable } from '@angular/core';
import { Employer } from 'src/app/core/models/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {
  employersData: Employer[];

  constructor() {
    this.employersData = [
      { id: 1, name: 'Employer 1' },
      { id: 2, name: 'Employer 2' },
      { id: 3, name: 'Employer 3' },
      { id: 4, name: 'Employer 4' },
      { id: 5, name: 'Employer 5' }
    ];
  }

  getEmployerData(id: number): Employer {
    return this.employersData.find(employer => employer.id === id);
  }
}
