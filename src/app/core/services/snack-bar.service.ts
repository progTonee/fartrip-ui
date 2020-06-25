import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackbar: MatSnackBar) {}

  show(message: string, isAction: boolean = false): void {
    this.snackbar.open(message, null, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
