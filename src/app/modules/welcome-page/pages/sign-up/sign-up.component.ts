import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { RoleValue, RoleLabel } from 'src/app/core/enums/role';
import { HttpService } from 'src/app/core/services/http.service';;
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Store } from '@ngrx/store';
import { SIGNUP_REQUEST } from '../../../../ngrx/actions/acccounts.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;
  roles: Role[];

  constructor(private fb: FormBuilder, private httpService: HttpService, private store: Store) {
    this.formGroup = this.fb.group(
      {
        name: ['', RxwebValidators.required],
        age: ['', RxwebValidators.required],
        email: ['', [RxwebValidators.required, RxwebValidators.email()]],
        role: ['', RxwebValidators.required],
        costPerKm: ['', RxwebValidators.required],
        workDescription: ['', RxwebValidators.required],
        password: ['', RxwebValidators.required],
        confirmPassword: ['', [RxwebValidators.required, RxwebValidators.compare({ fieldName: 'password' })]],
      }
    );

    this.roles = [
      { value: RoleValue.User, label: RoleLabel.User },
      { value: RoleValue.Employee, label: RoleLabel.Employee }
    ];
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    const { value } = this.formGroup;

    this.store.dispatch(SIGNUP_REQUEST({ payload: { accountData: this.getAccountData(value)  } }));
    this.formGroup.reset();
  }

  private getAccountData(formData: any): any {
    const accountData: any = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      password: formData.password,
      role: formData.role
    };

    if (formData.role === 'EMPLOYEE') {
      accountData.costPerKm = formData.costPerKm;
      accountData.workDescription = formData.workDescription;
    }

    return accountData;
  }

}
