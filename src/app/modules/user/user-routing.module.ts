import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { ProfileInfoComponent } from 'src/app/shared/components/profile-settings/profile-info/profile-info.component';
import { DriverComponent } from './components/drivers/driver/driver.component';
import { OrderComponent } from 'src/app/shared/components/orders/order/order.component';
import { OrdersComponent } from 'src/app/shared/components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'drivers', component: DriversComponent },
      { path: 'orders-history', component: OrdersComponent }
    ]
  },
  {
    path: 'user/settings',
    component: UserSettingsComponent,
    children: [
      { path: 'profile', component: ProfileInfoComponent },
    ]
  },
  { path: 'user/drivers/:id/details', component: DriverComponent },
  { path: 'user/orders-history/:id/details', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
