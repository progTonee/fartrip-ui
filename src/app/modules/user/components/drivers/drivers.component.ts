import { Component, OnInit } from '@angular/core';
import { DriversService } from './drivers.service';
import { Driver } from 'src/app/core/models/driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(public driversService: DriversService) {}

  ngOnInit(): void {
    this.driversService.loadDriversData();
  }

  getDriversData(): Driver[] {
    return this.driversService.getDriversData();
  }

}
