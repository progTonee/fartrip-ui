import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './pages/employer/employer.component';
import { EmployerRoutingModule } from './employer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmployerComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    SharedModule
  ],
  exports: [
    EmployerComponent
  ]
})
export class EmployerModule { }
