import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {
  @Input() displayText: string;
  @Output() buttonPressedEvent = new EventEmitter<any>(); // Event to be used in game components

  emitButtonClicked(){
    this.buttonPressedEvent.emit();
  }
}
