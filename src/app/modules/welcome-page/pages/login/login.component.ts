import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private snackbarService: SnackBarService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    const { value } = this.formGroup;
    this.httpService.login(value.email, value.password)
      .subscribe(
        response => {
          this.localStorageService.setLoginLocalStorage(response);
          this.router.navigateByUrl(response.role.toLowerCase());
        },
        error => this.snackbarService.show(error.error.errorMessage)
      );
  }

}
