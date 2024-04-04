import { Component } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';
import { MenuItem } from '../../../models/menuItem.model';
import { ModalService } from '../../../services/modal-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  menuItems: MenuItem[];
  sidenavSubtitle: string = '';
  selectedMenuItem: MenuItem;

  constructor(public sidenavService: SidenavService, 
              private _modalService: ModalService) {
    this.menuItems = this.sidenavService.getCreatedBoards();
    this.selectedMenuItem = this.menuItems[0]; // Allways preselect first board, if none exist, preselected baord will be the new tast button
    this.sidenavSubtitle = `ALL BOARDS (${this.menuItems.length})`  
  }

  handleMenuItemClick(clickedIndex: number){
    //TODO: Add new Board to boards list
    this.selectedMenuItem = this.menuItems[clickedIndex];
    console.log(clickedIndex)
    if(clickedIndex == this.menuItems.length - 1){ // If new board button clicked open dialog
      this._modalService.openNewBoardDialog();

    } else { // get tasks for board
      console.log(this.sidenavService.getSelectedBoardTasks())
    }
  }

}
