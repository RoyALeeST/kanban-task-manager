import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../services/modal-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../../../models/task.model';
import { TaskDialogChangeEvent, TaskService } from '../../../../services/task.service';
import { Subject, takeUntil } from 'rxjs';
import { TASK_STATUS } from '../../../../models/constants/taskStatus.model';

@Component({
  selector: 'app-task-details-dialog',
  templateUrl: './task-details-dialog.component.html',
  styleUrl: './task-details-dialog.component.scss'
})
export class TaskDetailsDialogComponent implements OnInit, OnDestroy{
  
  newTaskForm: FormGroup;
  subtasksForm: FormGroup;
  selectedTask: Task;
  selectedTaskIndex: number;
  tasksStatuses: string[] = [TASK_STATUS.TO_DO, TASK_STATUS.DOING,TASK_STATUS.DONE];

  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<TaskDetailsDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public selectedTaskData: any,
              private _taskService: TaskService,
              private _modalService: ModalService) 
              {
    this.newTaskForm = this.fb.group({
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskStatus: ['', [Validators.required]],
      subtasks: fb.array([])
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit() {
    this.selectedTask = this.selectedTaskData.task;
    this.selectedTaskIndex = this.selectedTaskData.parentTaskIndex;

    this.dialogRef.beforeClosed()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: ()=>{
        let updatedSubTaskDetails: TaskDialogChangeEvent = {
          parentColumnId: this.selectedTaskData.parentListId,
          parentTaskIndex: this.selectedTaskIndex,
          changedTask: this.selectedTask
        }
        this._taskService.notifySubTaskStatusChanged(updatedSubTaskDetails);
      }
    })
  }

  subtaskStatusSelected(subtaskStatusSelected: string){
    this.selectedTask.taskStatus = subtaskStatusSelected;
  }

  // receives an objec with this form {subtaskIndex: number, updatedSubtask: SubTask}
  handleSubtaskCompletedStatusSelected(updatedSubTaskStatus: any){
    this.selectedTask.subTasksList[updatedSubTaskStatus.subtaskIndex] = updatedSubTaskStatus.updatedSubtask;
  }

  // Helper method to get the 'items' FormArray
  get subtasks() {
    return this.newTaskForm.get('subtasks') as FormArray;
  }
}
