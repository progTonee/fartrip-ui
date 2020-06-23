import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { materialModules } from '../core/material/material';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarInfoComponent } from '../modules/employer/components/car-info/car-info.component';
import { EmployerCommentsComponent } from './components/profile-settings/employer-comments/employer-comments.component';
import { ProfileInfoComponent } from './components/profile-settings/profile-info/profile-info.component';
import { EmployerCommentsService } from './components/profile-settings/employer-comments/employer-comments.service';
import { CommentComponent } from './components/profile-settings/employer-comments/comment/comment.component';
import { ProfileInfoService } from './components/profile-settings/profile-info/profile-info.service';
import { DriverComponent } from '../modules/user/components/drivers/driver/driver.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OrderComponent } from './components/orders/order/order.component';
import { pipes } from '../core/pipes';
import { MapComponent } from './components/map/map.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './components/orders/orders.service';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    DriverComponent,
    ProfileSettingsComponent,
    CarInfoComponent,
    EmployerCommentsComponent,
    ProfileInfoComponent,
    CommentComponent,
    OrderComponent,
    ...pipes,
    MapComponent,
    OrdersComponent
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
    EmployerCommentsService,
    ProfileInfoService,
    OrdersService,
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    OrdersComponent,
    ProfileSettingsComponent,
    OrderComponent,
  ]
})
export class SharedModule { }
