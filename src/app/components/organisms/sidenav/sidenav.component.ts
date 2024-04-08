import { Component, OnDestroy } from '@angular/core';
import { SidenavService } from '../../../services/sidenav.service';
import { MenuItem, MenuItemType } from '../../../models/menuItem.model';
import { ModalService } from '../../../services/modal-service.service';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectAllMenuItems } from '../../../states/selectors/menu.selector'
import { selectAllBoards } from '../../../states/selectors/board.selector'

import { MenuState } from '../../../states/reducers/menu.reducer';
import { BoardsState } from '../../../states/reducers/board.reducer';
import { BoardService } from '../../../services/boards.service';
import { Board } from '../../../models/board.model';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnDestroy{

  menuItems: MenuItem[] = [];
  boardsMenuItems: MenuItem[] = [];

  sidenavSubtitle: string = '';
  selectedMenuItem: MenuItem;
  readonly newBoardMenuItemButton: MenuItem = {boardTitle: '+Create New Board', menuItemIcon: 'table_chart', menuItemType: MenuItemType.NEW_BOARD} // last item in menu, this is the button to add a new board
  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed


  constructor(private sidenavService: SidenavService, 
              private _boardService: BoardService, 
              private store: Store<{ menuState: MenuState, boardState: BoardsState }>,
              private _modalService: ModalService) 
  {
    this.updateBoardCountText(); 
    this.boardsMenuItems = this.sidenavService.loadBoardsMenuItems();
    this.menuItems = this.boardsMenuItems.concat([this.newBoardMenuItemButton])

    this.store.pipe(select(selectAllMenuItems))
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (menuItems: MenuItem[])=>{
        this.sidenavService.saveMenuItems(menuItems);
        this.boardsMenuItems = menuItems;
        this.menuItems = this.boardsMenuItems.concat([this.newBoardMenuItemButton]);      
        this.updateBoardCountText(); 
        this.menuItems.length > 1 ? this._boardService.changeSelectedBoard(0) : ''; // Select board on top of list, so if a new board is created it gets selected by default
      }
    });
  }

  handleMenuItemClick(clickedIndex: number){
    this.selectedMenuItem = this.menuItems[clickedIndex];
    if(clickedIndex == this.menuItems.length - 1){ // If new board button clicked open dialog
      this._modalService.openNewBoardDialog();
    } else { // get tasks for board
      this._boardService.loadBoard(this.selectedMenuItem.boardTitle);
    }
  }

  updateBoardCountText(){
    this.sidenavSubtitle = `ALL BOARDS (${this.boardsMenuItems.length})`  

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
