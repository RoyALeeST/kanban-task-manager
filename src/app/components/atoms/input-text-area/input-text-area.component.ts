import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.scss'
})
export class InputTextAreaComponent {
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }

  formControl: FormControl;
}
