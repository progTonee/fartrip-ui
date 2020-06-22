import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { OrdersHistoryComponent } from 'src/app/shared/components/orders-history/orders-history.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { ProfileInfoComponent } from 'src/app/shared/components/profile-settings/profile-info/profile-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'drivers', component: DriversComponent },
      { path: 'orders-history', component: OrdersHistoryComponent }
    ]
  },
  {
    path: 'user/settings',
    component: UserSettingsComponent,
    children: [
      { path: 'profile', component: ProfileInfoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
