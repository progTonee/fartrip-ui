import { Injectable } from '@angular/core';
import { EmployeeStatus } from 'src/app/core/models/employee-status';
import { employeeStatusList } from 'src/app/core/constants/employee-status';
import { HttpService } from 'src/app/core/services/http.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { ProfileInfo } from 'src/app/core/models/profile-info';
import { Car } from 'src/app/core/models/car';
import { Md5 } from 'ts-md5/dist/md5';
import { Gravatar } from 'src/app/core/enums/gravatar';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {
  statusList: EmployeeStatus[];
  profileInfoData: ProfileInfo;

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService
  ) {
    this.statusList = employeeStatusList;
  }

  loadProfileInfo(profileType: string): Observable<any> {
    return this.httpService.getProfileInfo(this.localStorageService.get('id'), profileType);
  }

  updateProfileInfoData(profileInfoData: any, profileType: string, requestType: string): void {
    this.httpService.updateProfileInfo(this.localStorageService.get('id'), profileInfoData, profileType, requestType)
      .subscribe(
        () => this.snackBarService.show('Data was successfully updated!'),
        error => this.snackBarService.show(error.error.message)
      );
  }

  updateEmployeeProfileCar(carInfoData: Car): void {
    this.httpService.updateEmployeeCarInfo(this.localStorageService.get('id'), carInfoData)
      .subscribe(() => {
        this.snackBarService.show('Data was successfully updated!');
        this.setProfileInfoData({
          ...this.getProfileInfoData(),
          car: carInfoData
        });
      });
  }

  updateProfileLogo(logoFormData: FormData): void {
    this.httpService.updateProfileLogo(this.localStorageService.get('id'), logoFormData)
      .subscribe(response => {
        this.profileInfoData.logo = response;
      });
  }

  removeProfileLogo(): void {
    this.httpService.removeProfileLogo(this.localStorageService.get('id'))
      .subscribe(() => {
        this.profileInfoData.logo = null;
      });
  }

  updateCarImage(logoFormData: FormData): void {
    this.httpService.updateCarImage(this.localStorageService.get('id'), logoFormData)
      .subscribe(response => {
        this.profileInfoData.car.image = response;
      });
  }

  removeCarImage(): void {
    this.httpService.removeCarImage(this.localStorageService.get('id'))
      .subscribe(() => {
        this.profileInfoData.car.image = null;
      });
  }

  setProfileInfoData(profileInfoData: any): void {
    this.profileInfoData = profileInfoData;
  }

  getProfileInfoData(): ProfileInfo {
    return this.profileInfoData;
  }

  getStatusList(): EmployeeStatus[] {
    return this.statusList;
  }

  getProfileGravatarUrl(): string {
    if (this.profileInfoData) {
      const md5 = new Md5();
      const md5Hash = md5.appendStr(this.profileInfoData.email).end().toString();

      return `${Gravatar.Url}/${md5Hash}?d=mp`;
    }

    return '';
  }
}
