import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss'
})
export class InputCheckboxComponent {
  @Input() checked: boolean = false;
  @Output() public checkboxPressedEvent = new EventEmitter();

  emitChangedValue(){ 
    this.checkboxPressedEvent.emit(this.checked);
  }
}
