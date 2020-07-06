import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) {}

  open(component: any, data: any): void {
    this.matDialog.open(component, {
      width: '400px',
      data
    });
  }
}
