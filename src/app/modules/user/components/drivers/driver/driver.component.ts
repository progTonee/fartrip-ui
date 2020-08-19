import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { DriversService } from '../drivers.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeStatusValue, EmployeeStatusText } from '../../../../../core/enums/employee-status';
import { EmployerCommentsService } from 'src/app/shared/components/profile-settings/employer-comments/employer-comments.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { OrderFormComponent } from 'src/app/core/components/order-form/order-form.component';
import { OrdersService } from 'src/app/shared/components/orders/orders.service';
import { Store } from '@ngrx/store';
import { LOAD_EMPLOYEE_REQUEST } from 'src/app/ngrx/actions/employees.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driver$: Observable<Driver> = this.store.select((state: AppState) => state.employees.viewableEmployee);

  constructor(
    private route: ActivatedRoute,
    private driversService: DriversService,
    private employerCommentsService: EmployerCommentsService,
    private dialogService: DialogService,
    private ordersService: OrdersService,
    private store: Store
  ) {}

  ngOnInit(): void {
    const driverId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(LOAD_EMPLOYEE_REQUEST({ payload: { accountId: +driverId } }));
  }

  getStatus(status: string): string {
    switch (status) {
      case EmployeeStatusValue.Available: {
        return EmployeeStatusText.Available;
      }
      case EmployeeStatusValue.InProgress: {
        return EmployeeStatusText.InProgress;
      }
      case EmployeeStatusValue.OutOfWork: {
        return EmployeeStatusText.OutOfWork;
      }
    }
  }

  getRating(rating: number): any[] {
    return new Array(Math.floor(rating)).fill(null);
  }

  getProfileGravatarUrl(email: string): string {
    return this.driversService.getProfileGravatarUrl(email);
  }

  onAddCommentClick(): void {
    this.employerCommentsService.setCommentOpen(true);
  }

  onDriverApply(): void {
    this.driver$.subscribe(driver => {
      this.dialogService.open(
        OrderFormComponent,
        {
          email: driver.email,
          employeeId: driver.id,
          costPerKm: driver.costPerKm
        }
      )
      .afterClosed()
      .toPromise()
      .then(data => this.ordersService.createOrder(data));
    });
  }

}
