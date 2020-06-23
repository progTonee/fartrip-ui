import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersHistoryService } from '../orders-history.service';
import { Employer } from 'src/app/core/models/employer';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/modules/user/users.service';
import { EmployersService } from 'src/app/modules/employer/employers.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  data: Order;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private ordersHistoryService: OrdersHistoryService,
    private usersService: UsersService,
    private employersService: EmployersService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    const type = this.route.snapshot.url[0].path;

    this.data = this.ordersHistoryService.getOrderData(+orderId);
    this.type = type;
  }

  getEmployerData(): Employer {
    return this.employersService.getEmployerData(this.data.employerId);
  }

  getUserData(): User {
    return this.usersService.getUserData(this.data.userId);
  }
}
