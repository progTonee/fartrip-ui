import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { materialModules } from 'src/app/core/material/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WelcomePageComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ...materialModules
  ],
  exports: [
    WelcomePageComponent
  ]
})
export class WelcomePageModule { }
