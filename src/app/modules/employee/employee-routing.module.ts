import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeSettingsComponent } from './pages/employee-settings/employee-settings.component';
import { ProfileInfoComponent } from 'src/app/shared/components/profile-settings/profile-info/profile-info.component';
import { EmployeeCommentsComponent } from 'src/app/shared/components/profile-settings/employe-comments/employee-comments.component';
import { OrderComponent } from 'src/app/shared/components/orders/order/order.component';
import { OrdersComponent } from 'src/app/shared/components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: 'orders-history', component: OrdersComponent },
    ]
  },
  {
    path: 'employee/settings',
    component: EmployeeSettingsComponent,
    children: [
      { path: 'profile', component: ProfileInfoComponent },
      { path: 'comments', component: EmployeeCommentsComponent }
    ]
  },
  { path: 'employee/orders-history/:id/details', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
