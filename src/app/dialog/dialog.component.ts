import {MatDialog, MatDialogRef} from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'my-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
   constructor(public dialogRef: MatDialogRef<DialogComponent>) { }
}