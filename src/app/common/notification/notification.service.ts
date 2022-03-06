import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {}

  notify(message: string, action?: string, type?: 'error' | 'success') {
    let panelClass = ['bg-soup-800'];
    if (type === 'error') panelClass = ['bg-red-600'];
    if (type === 'success') panelClass = ['bg-green-600'];
    this.snackbar.open(message, action, {
      panelClass: panelClass,
      horizontalPosition: 'center',
    });
  }
}
