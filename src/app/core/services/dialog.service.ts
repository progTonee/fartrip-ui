import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { OrdersService } from 'src/app/shared/components/orders/orders.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private matDialog: MatDialog,
    private ordersService: OrdersService
  ) {}

  open(component: any, data: any): MatDialogRef<any> {
    const dialog = this.matDialog.open(component, {
      width: '400px',
      data
    });

    return dialog;
  }
}
