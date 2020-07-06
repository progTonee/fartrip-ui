import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/core/models/driver.model';
import { DriversService } from '../drivers.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeStatusValue, EmployeeStatusText } from '../../../../../core/enums/employee-status';
import { EmployerCommentsService } from 'src/app/shared/components/profile-settings/employer-comments/employer-comments.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { OrderFormComponent } from 'src/app/core/components/order-form/order-form.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driverId: string;

  constructor(
    private route: ActivatedRoute,
    private driversService: DriversService,
    private employerCommentsService: EmployerCommentsService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.driverId = this.route.snapshot.paramMap.get('id');
    this.driversService.loadDriverData(+this.driverId);
  }

  getDriverData(): Driver {
    return this.driversService.getDriverData();
  }

  getRating(): any[] {
    const driver = this.driversService.getDriverData();
    if (driver) {
      return new Array(Math.floor(driver.rating)).fill(null);
    }

    return new Array(Math.floor(0)).fill(null);
  }

  getStatus(): string {
    const driver = this.driversService.getDriverData();
    if (driver) {
      switch (driver.status) {
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
  }

  onAddCommentClick(): void {
    this.employerCommentsService.setCommentOpen(true);
  }

  onDriverApply(): void {
    this.dialogService.open(
      OrderFormComponent,
      {
        employeeId: this.driverId,
        employeeCostPerKm: this.driversService.getDriverData().costPerKm
      }
    );
  }

}
