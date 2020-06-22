import { Injectable } from '@angular/core';
import { Status } from 'src/app/core/models/status';
import { statusList } from 'src/app/core/constants/status';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  statusList: Status[];

  constructor() {
    this.statusList = statusList;
  }

  getStatusList(): Status[] {
    return this.statusList;
  }
}
