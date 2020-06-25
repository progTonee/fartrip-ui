import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  employerTabs: any[];

  constructor(private router: Router) {
    this.employerTabs = [
      { label: 'Available orders', path: 'available-orders' },
      { label: 'Orders history', path: 'orders-history' }
    ];
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/employee/available-orders');
  }


}
