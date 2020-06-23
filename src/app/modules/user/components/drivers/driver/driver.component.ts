import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { DriversService } from '../drivers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  data: Driver;

  constructor(private route: ActivatedRoute, private driversService: DriversService) {}

  ngOnInit(): void {
    const driverId = this.route.snapshot.paramMap.get('id');
    this.data = this.driversService.getDriverData(+driverId);
  }

  getRating(): any[] {
    return new Array(Math.floor(this.data.rating)).fill(null);
  }

}
