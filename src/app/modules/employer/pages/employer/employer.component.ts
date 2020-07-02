import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  employerTabs: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/employee/orders-history');
  }

}
