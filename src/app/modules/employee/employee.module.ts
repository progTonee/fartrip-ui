import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeSettingsComponent } from './pages/employee-settings/employee-settings.component';
import { materialModules } from 'src/app/core/material/material';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeSettingsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    ...materialModules
  ]
})
export class EmployeeModule { }
