import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { RoleValue, RoleLabel } from 'src/app/core/enums/role';
import { HttpService } from 'src/app/core/services/http.service';
import { passwordsMustMatch } from 'src/app/core/validators/passwords-must-match.validator';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';

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
        name: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: passwordsMustMatch('password', 'confirmPassword') }
    );

    this.roles = [
      { value: RoleValue.User, label: RoleLabel.User },
      { value: RoleValue.Employee, label: RoleLabel.Employee }
    ];
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    const { value } = this.formGroup;

    if (value.role === 'USER') {
      this.httpService.signUpUser(value)
      .subscribe(
        () => {
          this.formGroup.reset();
          this.snackbar.show('You were successfully registered!');
        },
        error => {
          this.snackbar.show(error.error.errorMessage);
        }
      );
    } else {
      this.httpService.signUpEmployee(value)
      .subscribe(
        () => {
          this.formGroup.reset();
          this.snackbar.show('You were successfully registered!');
        },
        error => {
          this.snackbar.show(error.error.errorMessage);
        }
      );
    }
  }

}
