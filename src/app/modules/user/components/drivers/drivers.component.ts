import { Component, OnInit } from '@angular/core';
import { DriversService } from './drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(public driversService: DriversService) {}

  ngOnInit(): void {}

}
