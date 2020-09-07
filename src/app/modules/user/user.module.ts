import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './pages/user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriversService } from './components/drivers/drivers.service';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { materialModules } from 'src/app/shared/modules/material/material';
import { EmployeeStatusPipe } from 'src/app/core/pipes/employee-status.pipe';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesEffects } from 'src/app/ngrx/effects/employees.effects';
import { SpinnerService } from '../../core/services/spinner.service';

@NgModule({
  declarations: [
    UserComponent,
    DriversComponent,
    UserSettingsComponent,
    EmployeeStatusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule,
    EffectsModule.forFeature([EmployeesEffects]),
    ...materialModules,
  ],
  providers: [
    DriversService,
    DialogService,
    SpinnerService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
