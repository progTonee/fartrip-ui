import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { materialModules } from '../core/material/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
