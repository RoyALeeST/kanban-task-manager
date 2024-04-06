import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../../models/task.model';
import { TaskService } from '../../../../services/task.service';
import { Store } from '@ngrx/store';
import { ModalService } from '../../../../services/modal-service.service';
import { AddToDoTaskToBoard } from '../../../../states/actions/board.actions';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.scss'
})
export class NewTaskDialogComponent {
  newTaskForm: FormGroup;
  subtasksForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _modalService: ModalService,
              private _taskService: TaskService,
              private store: Store<any>
              ) {
    this.newTaskForm = fb.group({
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskStatus: ['', [Validators.required]],
      subtasks: fb.array([])
    });
  }

  addSubtask() {
    const subtaskForm = this.fb.group({
      subtaskName: ['', Validators.required],
      // Add more form controls as needed
    });
  
    // Add the new form group to the FormArray
    this.subtasks.push(subtaskForm);
  }

  popSubtask(){
    this.subtasks.removeAt(this.subtasks.length - 1)
  }

    // Helper method to get the 'items' FormArray
    get subtasks() {
      return this.newTaskForm.get('subtasks') as FormArray;
    }

  onSubmit() {
    if (this.newTaskForm.invalid) {
      return;
    }
    let newTask: Task = this.newTaskForm.value;
    console.log(newTask)

    this._modalService.close();
    // this.store.dispatch(AddToDoTaskToBoard());

  }


}
