import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items-text',
  templateUrl: './menu-items-text.component.html',
  styleUrl: './menu-items-text.component.scss'
})
export class MenuItemsTextComponent {
  @Input()
  displayText?: string;
}
