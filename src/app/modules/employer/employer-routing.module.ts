import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './pages/employer/employer.component';
import { EmployerSettingsComponent } from './pages/employer-settings/employer-settings.component';
import { ProfileInfoComponent } from 'src/app/shared/components/profile-settings/profile-info/profile-info.component';
import { EmployerCommentsComponent } from 'src/app/shared/components/profile-settings/employer-comments/employer-comments.component';
import { OrderComponent } from 'src/app/shared/components/orders/order/order.component';
import { OrdersComponent } from 'src/app/shared/components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerComponent,
    children: [
      { path: 'orders-history', component: OrdersComponent },
    ]
  },
  {
    path: 'employee/settings',
    component: EmployerSettingsComponent,
    children: [
      { path: 'profile', component: ProfileInfoComponent },
      { path: 'comments', component: EmployerCommentsComponent }
    ]
  },
  { path: 'employee/available-orders/:id/details', component: OrderComponent },
  { path: 'employee/orders-history/:id/details', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
