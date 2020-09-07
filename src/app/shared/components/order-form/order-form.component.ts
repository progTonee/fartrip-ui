import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<OrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.formGroup = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      userNotes: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.dialogRef.close({
      order: this.formGroup.value,
      employee: {
        email: this.data.email,
        accountId: this.data.employeeId,
        costPerKm: this.data.costPerKm
      }
    });
  }

}
