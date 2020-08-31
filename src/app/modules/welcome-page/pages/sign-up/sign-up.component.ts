import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { RoleValue, RoleLabel } from 'src/app/core/enums/role';
import { HttpService } from 'src/app/core/services/http.service';
import { passwordsMustMatch } from 'src/app/core/validators/passwords-must-match.validator';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup;
  roles: Role[];

  constructor(private fb: FormBuilder, private httpService: HttpService, private snackbar: SnackBarService) {
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

  handleSuccessfullyRegistration(): void {
    this.formGroup.reset();
    this.snackbar.show('You were successfully registered!');
  }

  handleErrorRegistration(error: any): void {
    this.snackbar.show(error.error.message);
  }

  onFormSubmit(): void {
    const { value } = this.formGroup;

    if (value.role === 'USER') {
      const userData = { name: value.name, age: value.age, email: value.email, password: value.password };

      this.httpService.signUpUser(userData)
        .subscribe(() => this.handleSuccessfullyRegistration(), error => this.handleErrorRegistration(error));
    } else {
      this.httpService.signUpEmployee(value)
        .subscribe(() => this.handleSuccessfullyRegistration(), error => this.handleErrorRegistration(error));
    }
  }

}
