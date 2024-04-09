import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }

  formControl: FormControl;

}
