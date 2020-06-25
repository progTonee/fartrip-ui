import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userTabs: any[];

  constructor(private router: Router) {
    this.userTabs = [
      { label: 'Drivers', path: 'drivers' },
      { label: 'Orders history', path: 'orders-history' }
    ];
  }

  ngOnInit(): void {
    this.router.navigateByUrl('/user/drivers');
  }

}
