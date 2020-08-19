import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { materialModules } from 'src/app/core/material/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/ngrx/effects/auth.effects';

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
    EffectsModule.forFeature([AuthEffects]),
    ...materialModules
  ],
  providers: [
    HttpService,
    SnackBarService,
    LocalStorageService
  ],
  exports: [
    WelcomePageComponent
  ]
})
export class WelcomePageModule { }
