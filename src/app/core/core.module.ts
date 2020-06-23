import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSpentTimePipe } from './pipes/order-spent-time.pipe';

@NgModule({
  declarations: [OrderSpentTimePipe],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
