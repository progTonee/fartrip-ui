import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './pages/employer/employer.component';
import { AvailableOrdersComponent } from './components/available-orders/available-orders.component';
import { OrdersHistoryComponent } from 'src/app/shared/components/orders-history/orders-history.component';
import { EmployerSettingsComponent } from './pages/employer-settings/employer-settings.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerComponent,
    children: [
      { path: 'available-orders', component: AvailableOrdersComponent },
      { path: 'orders-history', component: OrdersHistoryComponent },
    ]
  },
  { path: 'employer/settings', component: EmployerSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
