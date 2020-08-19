import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/welcome-page/pages/login/login.component';
import { SignUpComponent } from './modules/welcome-page/pages/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'welcome-page',
    loadChildren: () => import('./modules/welcome-page/welcome-page.module').then(module => module.WelcomePageModule),
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employer/employer.module').then(module => module.EmployerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
