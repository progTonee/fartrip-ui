import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  employerTabs: any[];

  constructor() {
    this.employerTabs = [
      { label: 'Available orders', path: 'available-orders' },
      { label: 'Orders history', path: 'orders-history' }
    ];
  }

  ngOnInit(): void {
  }

}
