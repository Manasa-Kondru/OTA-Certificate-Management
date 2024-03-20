import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent {
  constructor(private dialogRef: MatDialogRef<ExitComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private route: Router) { }

  confirm() {
    this.dialogRef.close();
    this.route.navigate(['/auth']).then(() => {
      // window.location.reload();
    });
  }
  close() {
    this.dialogRef.close();
  }
}
