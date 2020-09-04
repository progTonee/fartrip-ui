import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/employee/orders-history');
  }

}
