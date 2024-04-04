import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrl: './input-dropdown.component.scss'
})
export class InputDropdownComponent {

  _selectedValue: any;
  formControl: FormControl;

  @Input()  dropdownList: any[];
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }
    // Getter method to access formcontrols
    get selectedValue() {
      return this._selectedValue;
    }
}
