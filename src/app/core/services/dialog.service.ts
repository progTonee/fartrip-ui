import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {}

  open(component: any, data: any): MatDialogRef<any> {
    const dialog = this.matDialog.open(component, {
      width: '400px',
      data
    });

    return dialog;
  }
}
