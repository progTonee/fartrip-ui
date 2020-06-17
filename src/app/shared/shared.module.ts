import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { materialModules } from '../core/material/material';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpensionPanelComponent } from './components/expension-panel/expension-panel.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { OrdersHistoryService } from './components/orders-history/orders-history.service';
import { DriverComponent } from '../modules/user/components/driver/driver.component';
import { AvailableOrderComponent } from '../modules/employer/components/available-order/available-order.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    ExpensionPanelComponent,
    OrdersHistoryComponent,
    DriverComponent,
    AvailableOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  providers: [
    OrdersHistoryService
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    ExpensionPanelComponent,
    OrdersHistoryComponent
  ]
})
export class SharedModule { }
