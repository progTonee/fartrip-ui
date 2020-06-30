import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriversService } from './components/drivers/drivers.service';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { materialModules } from 'src/app/core/material/material';
import { UsersService } from './users.service';
import { EmployeeStatusPipe } from 'src/app/core/pipes/employee-status.pipe';

@NgModule({
  declarations: [
    UserComponent,
    DriversComponent,
    UserSettingsComponent,
    EmployeeStatusPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ...materialModules,
  ],
  providers: [
    DriversService,
    UsersService
  ],
  exports: [
    UserComponent,
  ]
})
export class UserModule { }
