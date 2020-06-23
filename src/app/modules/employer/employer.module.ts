import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './pages/employer/employer.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployerSettingsComponent } from './pages/employer-settings/employer-settings.component';
import { materialModules } from 'src/app/core/material/material';

@NgModule({
  declarations: [
    EmployerComponent,
    EmployerSettingsComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule,
    ...materialModules
  ]
})
export class EmployerModule { }
