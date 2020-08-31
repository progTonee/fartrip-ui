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
import { DialogService } from 'src/app/core/services/dialog.service';
import { OrderFormComponent } from 'src/app/core/components/order-form/order-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from 'src/app/ngrx/effects/employees.effects';
import { SpinnerService } from '../../core/services/spinner.service';

@NgModule({
  declarations: [
    UserComponent,
    DriversComponent,
    UserSettingsComponent,
    EmployeeStatusPipe,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    EffectsModule.forFeature([EmployeesEffects]),
    ...materialModules,
  ],
  entryComponents: [
    OrderFormComponent
  ],
  providers: [
    DriversService,
    UsersService,
    DialogService,
    SpinnerService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
