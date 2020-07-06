import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/shared/components/orders/orders.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private ordersService: OrdersService, @Inject(MAT_DIALOG_DATA) private data: any) {
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
    this.ordersService.createOrder(
      this.formGroup.value,
      { employee:
        {
          employeeId: this.data.employeeId,
          employeeCostPerKm: this.data.employeeCostPerKm
        }
      }
    );
  }

}
