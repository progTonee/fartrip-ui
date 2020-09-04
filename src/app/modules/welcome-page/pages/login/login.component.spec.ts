import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { materialModules } from '../../../../core/material/material';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../ngrx';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, HeaderComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...materialModules,
        StoreModule.forRoot(reducers),
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
    }).compileComponents();
  });

  it('Should contain 2 fileds in formGroup', () => {
    const formGroupFields = ['email', 'password'];
    const fixture = TestBed.createComponent(LoginComponent).componentInstance;
    const componentFormGroupFields = Object.keys(fixture.formGroup.controls);

    expect(componentFormGroupFields).toEqual(formGroupFields);
  });

});
