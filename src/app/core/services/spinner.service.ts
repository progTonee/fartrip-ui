import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinner = false;

  constructor() {}

  getSpinner(): boolean {
    return this.spinner;
  }

  turnSpinner(spinner: boolean) {
    this.spinner = spinner;
  }
}
