import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewTaskDialogComponent } from '../components/molecules/dialogs/new-task-dialog/new-task-dialog.component';
import { TaskDetailsDialogComponent } from '../components/molecules/dialogs/task-details-dialog/task-details-dialog.component';
import { Task } from '../models/task.model';
import { NewBoardDialogComponent } from '../components/molecules/dialogs/new-board-dialog/new-board-dialog.component';


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

  openTaskDetailsDialog(task: Task, parentTaskIndex: number, parentListId: string){
    if(this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogConfig.data = {task: task, parentTaskIndex: parentTaskIndex, parentListId: parentListId};
    this.dialogConfig.panelClass = 'app-task-details-dialog';

    this.dialogRef = this.dialog.open(TaskDetailsDialogComponent, this.dialogConfig);
  }

  openNewBoardDialog(){
    if(this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogConfig.panelClass = 'app-new-board-dialog';

    this.dialogRef = this.dialog.open(NewBoardDialogComponent, this.dialogConfig);
  }

  close() {
    if(this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
