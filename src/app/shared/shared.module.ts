import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { materialModules } from '../core/material/material';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { OrdersHistoryService } from './components/orders-history/orders-history.service';
import { AvailableOrderComponent } from '../modules/employer/components/available-orders/available-order/available-order.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarInfoComponent } from '../modules/employer/components/car-info/car-info.component';
import { EmployerCommentsComponent } from './components/profile-settings/employer-comments/employer-comments.component';
import { ProfileInfoComponent } from './components/profile-settings/profile-info/profile-info.component';
import { EmployerCommentsService } from './components/profile-settings/employer-comments/employer-comments.service';
import { CommentComponent } from './components/profile-settings/employer-comments/comment/comment.component';
import { ProfileInfoService } from './components/profile-settings/profile-info/profile-info.service';
import { DriverComponent } from '../modules/user/components/drivers/driver/driver.component';
import { CardComponent } from './components/card/card.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OrderComponent } from './components/orders-history/order/order.component';
import { pipes } from '../core/pipes';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    OrdersHistoryComponent,
    DriverComponent,
    AvailableOrderComponent,
    ProfileSettingsComponent,
    CarInfoComponent,
    EmployerCommentsComponent,
    ProfileInfoComponent,
    CommentComponent,
    CardComponent,
    OrderComponent,
    ...pipes,
    MapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    ...materialModules,
  ],
  providers: [
    OrdersHistoryService,
    EmployerCommentsService,
    ProfileInfoService,
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    OrdersHistoryComponent,
    ProfileSettingsComponent,
    CardComponent,
    OrderComponent,
  ]
})
export class SharedModule { }
