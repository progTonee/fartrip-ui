import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  formGroup: FormGroup;
  isInfoEdited = false;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      model: ['', Validators.required],
      type: ['', Validators.required],
      seatsAmount: [null, Validators.required],
    });
    this.formGroup.disable();
  }

  ngOnInit(): void {}

  onEditClick(): void {
    this.isInfoEdited = !this.isInfoEdited;
    if (this.isInfoEdited) {
      this.formGroup.enable();
    } else {
      this.formGroup.disable();
    }
  }

  onCarInfoSettingsSubmit(): void {

  }

}
