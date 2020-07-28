import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileInfoService } from 'src/app/shared/components/profile-settings/profile-info/profile-info.service';
import { Car } from 'src/app/core/models/car';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  formGroup: FormGroup;
  isInfoEdited = false;

  constructor(private fb: FormBuilder, private profileInfoService: ProfileInfoService) {
    this.formGroup = this.fb.group({
      model: ['', Validators.required],
      note: ['', Validators.required],
    });
    this.formGroup.disable();
  }

  ngOnInit(): void {}

  getCarInfo(): Car | null {
    const profileData = this.profileInfoService.getProfileInfoData();
    return profileData ? profileData.car : null;
  }

  getCarGravatarUrl(): string {
    return this.profileInfoService.getProfileGravatarUrl();
  }

  onEditClick(): void {
    this.isInfoEdited = !this.isInfoEdited;
    if (this.isInfoEdited) {
      this.formGroup.enable();
    } else {
      this.formGroup.disable();
    }
  }

  onCarInfoSubmit(): void {
    const { model, note } = this.formGroup.value;
    this.profileInfoService.updateEmployeeProfileCar({ model, note });
  }

}
