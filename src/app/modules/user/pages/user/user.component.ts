import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userTabs: any[];

  constructor() {
    this.userTabs = [
      { label: 'Drivers', path: 'drivers' },
      { label: 'Orders history', path: 'orders-history' }
    ];
  }

  ngOnInit() {
  }

}
