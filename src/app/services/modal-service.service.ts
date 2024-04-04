import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewTaskDialogComponent } from '../components/molecules/dialogs/new-task-dialog/new-task-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public dialogConfig:any = {};
  dialogRef: MatDialogRef<any, any>;

  constructor(public dialog: MatDialog) { }

  openNewTaskDialog() {
    if(this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(NewTaskDialogComponent, {
      panelClass: 'app-new-task-dialog'
    });
  }

  close() {
    if(this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
