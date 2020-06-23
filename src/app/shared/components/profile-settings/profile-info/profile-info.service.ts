import { Injectable } from '@angular/core';
import { EmployerStatus } from 'src/app/core/models/employer-status';
import { employerStatusList } from 'src/app/core/constants/status';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  statusList: EmployerStatus[];

  constructor() {
    this.statusList = employerStatusList;
  }

  getStatusList(): EmployerStatus[] {
    return this.statusList;
  }
}
