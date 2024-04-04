import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../services/modal-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-task-details-dialog',
  templateUrl: './task-details-dialog.component.html',
  styleUrl: './task-details-dialog.component.scss'
})
export class TaskDetailsDialogComponent implements OnInit{
  
  newTaskForm: FormGroup;
  subtasksForm: FormGroup;
  selectedTask: Task;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<TaskDetailsDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public selectedTaskData: Task,
              private _modalService: ModalService) 
              {
    this.newTaskForm = fb.group({
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskStatus: ['', [Validators.required]],
      subtasks: fb.array([])
    });
  }

  ngOnInit() {
    this.selectedTask = this.selectedTaskData
    console.log(this.selectedTask)
  }

  public closeDialog = () => {
    this.dialogRef.close();
  }

  subtaskStatusSelected(subtaskStatusSelected: string){
    console.log(subtaskStatusSelected);
  }

    // Helper method to get the 'items' FormArray
    get subtasks() {
      return this.newTaskForm.get('subtasks') as FormArray;
    }

  onSubmit() {
    console.log(this.newTaskForm.value);
  }
}
