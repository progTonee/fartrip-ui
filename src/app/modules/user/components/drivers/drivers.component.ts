import { Component, OnInit } from '@angular/core';
import { DriversService } from './drivers.service';
import { Driver } from 'src/app/core/models/driver.model';
import { Store } from '@ngrx/store';
import { LOAD_EMPLOYEES_REQUEST } from 'src/app/ngrx/actions/employees.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers$: Observable<Driver[]> = this.store.select((state: AppState) => state.employees.employees);

  constructor(public driversService: DriversService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LOAD_EMPLOYEES_REQUEST());
  }

  getLogo(logo: number[]): string | null {
    const typedArray = new Uint8Array(logo);
    const typedArrayChars = String.fromCharCode.apply(null, typedArray);
    const base64String = btoa(typedArrayChars);

    return base64String;
  }

}
