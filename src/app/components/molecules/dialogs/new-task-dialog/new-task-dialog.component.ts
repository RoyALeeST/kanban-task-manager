import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrl: './new-task-dialog.component.scss'
})
export class NewTaskDialogComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      password: new FormControl("", Validators.required),
    });
  }
}
