import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../../models/menuItem.model';

@Component({
  selector: 'app-sidenav-link',
  templateUrl: './sidenav-link.component.html',
  styleUrl: './sidenav-link.component.scss'
})
export class SidenavLinkComponent {
  @Input()
  menuItemData: MenuItem;

  @Output() menuItemClickEvent = new EventEmitter<string>();

  emitItemClicked() {
      this.menuItemClickEvent.emit();
    }
  }
