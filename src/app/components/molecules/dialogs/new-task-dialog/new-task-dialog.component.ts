import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../../models/task.model';
import { TaskService } from '../../../../services/task.service';
import { Store } from '@ngrx/store';
import { ModalService } from '../../../../services/modal-service.service';
import { AddToDoTaskToBoard } from '../../../../states/actions/board.actions';
import { BoardService } from '../../../../services/boards.service';
import { TASK_STATUS } from '../../../../models/constants/taskStatus.model';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.scss'
})
export class NewTaskDialogComponent {
  newTaskForm: FormGroup;
  subtasksForm: FormGroup;
  tasksStatuses: string[] = [TASK_STATUS.TO_DO, TASK_STATUS.DOING,TASK_STATUS.DONE];

  constructor(private fb: FormBuilder,
              private _modalService: ModalService,
              private _boardService: BoardService,
              private store: Store<any>
              ) {
    this.newTaskForm = fb.group({
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskStatus: ['', [Validators.required]],
      subTasksList: fb.array([])
    });
  }

  addSubtask() {
    const subtaskForm = this.fb.group({
      description: ['', Validators.required],
      status: [false]
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
      return this.newTaskForm.get('subTasksList') as FormArray;
    }

  onSubmit() {
    if (this.newTaskForm.invalid) {
      return;
    }
    let newTask: Task = this.newTaskForm.value;
    console.log(newTask);

    this._boardService.addTaskToBoard(newTask);
    this._modalService.close();

  }


}
