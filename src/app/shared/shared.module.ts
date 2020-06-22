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
import { AvailableOrderComponent } from '../modules/employer/components/available-orders/available-order/available-order.component';
import { OrderHistoryComponent } from './components/orders-history/order-history/order-history.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarInfoComponent } from '../modules/employer/components/car-info/car-info.component';
import { EmployerCommentsComponent } from './components/profile-settings/employer-comments/employer-comments.component';
import { ProfileInfoComponent } from './components/profile-settings/profile-info/profile-info.component';
import { EmployerCommentsService } from './components/profile-settings/employer-comments/employer-comments.service';
import { CommentComponent } from './components/profile-settings/employer-comments/comment/comment.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    ExpensionPanelComponent,
    OrdersHistoryComponent,
    DriverComponent,
    AvailableOrderComponent,
    OrderHistoryComponent,
    ProfileSettingsComponent,
    CarInfoComponent,
    EmployerCommentsComponent,
    ProfileInfoComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...materialModules,
  ],
  providers: [
    OrdersHistoryService,
    EmployerCommentsService,
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    ExpensionPanelComponent,
    OrdersHistoryComponent,
    ProfileSettingsComponent
  ]
})
export class SharedModule { }
