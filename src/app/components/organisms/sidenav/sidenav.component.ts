import { Component } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';
import { MenuItem } from '../../../models/menuItem.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  menuItems: MenuItem[];
  sidenavSubtitle: string = '';
  selectedMenuItem: MenuItem;

  constructor(public sidenavService: SidenavService) {
    this.menuItems = this.sidenavService.getCreatedBoards();
    this.selectedMenuItem = this.menuItems[1]; // Allways preselect first board, if none exist, preselected baord will be the new tast button
    this.sidenavSubtitle = `ALL BOARDS (${this.menuItems.length})`  
  }

  handleMenuItemClick(clickedIndex: number){
    //TODO: Add new Board to boards list
    this.selectedMenuItem = this.menuItems[clickedIndex];
    console.log(this.sidenavService.getSelectedBoardTasks())
  }

}
