import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-icon',
  templateUrl: './menu-item-icon.component.html',
  styleUrl: './menu-item-icon.component.scss'
})
export class MenuItemIconComponent {
  @Input()
  materialIconKey?: string;
}
