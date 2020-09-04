import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileInfoService } from './profile-info.service';
import { passwordsMustMatch } from 'src/app/core/validators/passwords-must-match.validator';
import { EmployeeStatus } from 'src/app/core/models/employee-status';
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

  constructor(private fb: FormBuilder, private router: Router, private profileInfoService: ProfileInfoService) {
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
      .subscribe(response => this.handleProfileInfoData(response));
  }

  getStatusList(): EmployeeStatus[] {
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

  getLogo(): string {
    const profileInfo = this.profileInfoService.getProfileInfoData();

    if (profileInfo && profileInfo.logo) {
      const typedArray = new Uint8Array(profileInfo.logo.data);
      const typedArrayChars = String.fromCharCode.apply(null, typedArray);
      const base64String = btoa(typedArrayChars);

      return base64String;
    } else {
      return null;
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

  onUploadImage(images: any): void {
    const image = images.item(0);
    const formData = new FormData();

    formData.append('logo', image, image.name);

    this.profileInfoService.updateProfileLogo(formData);
  }

  onRemoveImage(): void {
    this.profileInfoService.removeProfileLogo();
  }
}
