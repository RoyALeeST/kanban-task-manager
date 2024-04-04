import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../../models/task.model';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.scss'
})
export class NewTaskDialogComponent {
  newTaskForm: FormGroup;
  subtasksForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log('sadadasdadas')
    this.subtasks.removeAt(this.subtasks.length - 1)
  }

    // Helper method to get the 'items' FormArray
    get subtasks() {
      return this.newTaskForm.get('subtasks') as FormArray;
    }

  onSubmit() {
    console.log(this.newTaskForm.value);
  }
}
