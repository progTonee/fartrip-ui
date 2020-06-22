import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  isCarInfoDisplayed: boolean;

  commonProfileFormGroup: FormGroup;
  passwordProfileFormGroup: FormGroup;
  isProfileEdited = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.commonProfileFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
    });
    this.passwordProfileFormGroup = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });

    this.commonProfileFormGroup.disable();
    this.passwordProfileFormGroup.disable();
  }

  ngOnInit(): void {
    this.isCarInfoDisplayed = this.router.url.indexOf('employer') !== -1;
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
    if (infoType === 'commonProfileInfo') {
      const commonData = this.commonProfileFormGroup.value;
      console.log(commonData);
    } else {
      const passwordData = this.passwordProfileFormGroup.value;
      console.log(passwordData);
    }
  }
}
