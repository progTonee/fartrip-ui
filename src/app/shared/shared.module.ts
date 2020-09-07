import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HeaderComponent } from './components/header/header.component';
import { materialModules } from './modules/material/material';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarInfoComponent } from '../modules/employee/components/car-info/car-info.component';
import { EmployeeCommentsComponent } from './components/profile-settings/employe-comments/employee-comments.component';
import { ProfileInfoComponent } from './components/profile-settings/profile-info/profile-info.component';
import { EmployeeCommentsService } from './components/profile-settings/employe-comments/employee-comments.service';
import { CommentComponent } from './components/profile-settings/employe-comments/comment/comment.component';
import { ProfileInfoService } from './components/profile-settings/profile-info/profile-info.service';
import { DriverComponent } from '../modules/user/components/drivers/driver/driver.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OrderComponent } from './components/orders/order/order.component';
import { MapComponent } from './components/map/map.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersService } from './components/orders/orders.service';
import { OrderSpendTimePipe } from '../core/pipes/order-spend-time.pipe';
import { OrderStatusPipe } from '../core/pipes/order-status.pipe';
import { OrderDistancePipe } from '../core/pipes/order-distance.pipe';
import { MapService } from './components/map/map.service';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from '../ngrx/effects/orders.effects';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    DriverComponent,
    ProfileSettingsComponent,
    CarInfoComponent,
    EmployeeCommentsComponent,
    ProfileInfoComponent,
    CommentComponent,
    OrderComponent,
    MapComponent,
    OrdersComponent,
    OrderSpendTimePipe,
    OrderStatusPipe,
    OrderDistancePipe,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    LeafletModule,
    NgxMaterialTimepickerModule,
    EffectsModule.forFeature([OrdersEffects]),
    ...materialModules,
  ],
  providers: [
    EmployeeCommentsService,
    ProfileInfoService,
    OrdersService,
    MapService,
  ],
  entryComponents: [OrderFormComponent],
  exports: [
    HeaderComponent,
    TabsComponent,
    OrdersComponent,
    ProfileSettingsComponent,
    OrderComponent,
    OrderFormComponent
  ]
})
export class SharedModule { }
