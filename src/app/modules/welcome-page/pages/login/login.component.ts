import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LOGIN_REQUEST } from '../../../../ngrx/actions/auth.actions';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.formGroup = this.fb.group({
      email: ['', [RxwebValidators.required(), RxwebValidators.email()]],
      password: ['', RxwebValidators.required()]
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    const { value } = this.formGroup;
    this.store.dispatch(LOGIN_REQUEST({ payload: { username: value.email, password: value.password } }));
  }

}
