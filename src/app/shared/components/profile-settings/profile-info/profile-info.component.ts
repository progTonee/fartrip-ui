import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileInfoService } from './profile-info.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { passwordsMustMatch } from 'src/app/core/validators/passwords-must-match.validator';
import { EmployerStatus } from 'src/app/core/models/employer-status';
import { EmployeeStatusValue, EmployeeStatusText } from 'src/app/core/enums/employee-status';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  commonProfileFormGroup: FormGroup;
  passwordProfileFormGroup: FormGroup;
  isEmployerInfoDisplayed: boolean;
  isProfileEdited = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private profileInfoService: ProfileInfoService,
    private authService: AuthService,
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) {
    this.commonProfileFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.passwordProfileFormGroup = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmNewPassword: ['', Validators.required],
      },
      { validators: passwordsMustMatch('newPassword', 'confirmNewPassword') }
    );

    this.commonProfileFormGroup.disable();
    this.passwordProfileFormGroup.disable();
  }

  ngOnInit(): void {
    this.isEmployerInfoDisplayed = this.router.url.indexOf('employee') !== -1;
    const profileType = this.isEmployerInfoDisplayed ? 'employee' : 'user';

    this.profileInfoService.loadProfileInfo(profileType)
      .subscribe(
        response => this.handleProfileInfoData(response),
        error => {
          if (this.authService.isAccessTokenExpiredError(error)) {
            return this.httpService.refresh()
              .subscribe(refreshTokenResponse => {
                this.localStorageService.set('access_token', refreshTokenResponse.access_token);

                this.profileInfoService.loadProfileInfo(profileType)
                  .subscribe(response => this.handleProfileInfoData(response));
              });
          }
        }
      );
  }

  getStatusList(): EmployerStatus[] {
    return this.profileInfoService.getStatusList();
  }

  getStatus(status: string | null): string {
    switch (status) {
      case EmployeeStatusValue.Available: {
        return EmployeeStatusText.Available;
      }
      case EmployeeStatusValue.InProgress: {
        return EmployeeStatusText.InProgress;
      }
      case EmployeeStatusValue.OutOfWork: {
        return EmployeeStatusText.OutOfWork;
      }
      default: {
        return '';
      }
    }
  }

  handleProfileInfoData(profileInfoData: any): any {
    this.profileInfoService.setProfileInfoData(profileInfoData);
    this.commonProfileFormGroup.setValue({
      name: profileInfoData.name,
      email: profileInfoData.email,
      age: profileInfoData.age,
      status: this.getStatus(profileInfoData.status)
    });
  }

  onEditClick(): void {
    this.isProfileEdited = !this.isProfileEdited;
    if (this.isProfileEdited) {
      this.commonProfileFormGroup.enable();
      this.passwordProfileFormGroup.enable();
    } else {
      this.commonProfileFormGroup.disable();
      this.passwordProfileFormGroup.disable();
    }
  }

  onProfileSubmit(infoType: string): void {
    const profileType = this.isEmployerInfoDisplayed ? 'employee' : 'user';
    const { name, age, email, status } = this.commonProfileFormGroup.value;
    const { currentPassword, newPassword } = this.passwordProfileFormGroup.value;

    if (infoType === 'commonProfileInfo') {
      if (profileType === 'employee') {
        this.profileInfoService.updateProfileInfoData({ name, age, email, status }, profileType, 'common');
        this.profileInfoService.setProfileInfoData({ name, age, email, status });
      } else {
        this.profileInfoService.updateProfileInfoData({ name, age, email }, profileType, 'common');
        this.profileInfoService.setProfileInfoData({ name, age, email });
      }
    } else {
      this.profileInfoService.updateProfileInfoData({ password: currentPassword, newPassword }, profileType, 'password');
    }
  }
}
