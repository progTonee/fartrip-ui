import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  @Input() type: string;

  settingsTabs: any[];

  commonProfileFormGroup: FormGroup;
  passwordProfileFormGroup: FormGroup;
  isProfileEdited = false;

  constructor(private fb: FormBuilder) {
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
    this.settingsTabs = [
      { label: 'Profile info', path: 'profile' },
    ];

    if (this.type === 'employer') {
      this.settingsTabs.push({ label: 'Employer comments', path: 'comments' });
    }
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

  onProfileSettingsSubmit(infoType: string): void {
    if (infoType === 'commonProfileInfo') {
      const commonData = this.commonProfileFormGroup.value;
      console.log(commonData);
    } else {
      const passwordData = this.passwordProfileFormGroup.value;
      console.log(passwordData);
    }
  }

}
