import { TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../ngrx';
import { RouterTestingModule } from '@angular/router/testing';
import { materialModules } from '../../../../shared/modules/material/material';

describe('SignUpComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent, HeaderComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule.withRoutes([]),
        ...materialModules
      ]
    }).compileComponents();
  });

  it('Should contain 8 fileds in formGroup', () => {
    const formGroupFields = ['name', 'age', 'email', 'role', 'costPerKm', 'workDescription', 'password', 'confirmPassword'];
    const fixture = TestBed.createComponent(SignUpComponent).componentInstance;
    const componentFormGroupFields = Object.keys(fixture.formGroup.controls);

    expect(componentFormGroupFields).toEqual(formGroupFields);
  });

});
