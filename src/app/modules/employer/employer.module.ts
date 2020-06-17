import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './pages/employer/employer.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvailableOrdersComponent } from './components/available-orders/available-orders.component';
import { AvailabeOrdersService } from './components/available-orders/availabe-orders.service';
import { EmployerSettingsComponent } from './pages/employer-settings/employer-settings.component';

@NgModule({
  declarations: [
    EmployerComponent,
    AvailableOrdersComponent,
    EmployerSettingsComponent,
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule
  ],
  providers: [
    AvailabeOrdersService
  ]
})
export class EmployerModule { }
