import { Injectable } from '@angular/core';
import { MenuItem, MenuItemType } from '../models/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {

  getCreatedBoards(): MenuItem[]{
    let currentBoards: MenuItem[] = [];
    currentBoards.push({boardTitle: 'Title1', menuItemIcon: 'table_chart', menuItemType: MenuItemType.DISPLAY_BOARD});
    currentBoards.push({boardTitle: 'Title2', menuItemIcon: 'table_chart', menuItemType: MenuItemType.DISPLAY_BOARD});
    currentBoards.push({boardTitle: 'Title3', menuItemIcon: 'table_chart', menuItemType: MenuItemType.DISPLAY_BOARD});
    currentBoards.push({boardTitle: 'Title4', menuItemIcon: 'table_chart', menuItemType: MenuItemType.DISPLAY_BOARD});
    currentBoards.push({boardTitle: 'Title5', menuItemIcon: 'table_chart', menuItemType: MenuItemType.DISPLAY_BOARD});
    currentBoards.push({boardTitle: '+Create New Board', menuItemIcon: 'table_chart', menuItemType: MenuItemType.NEW_BOARD});
    return currentBoards;
  }

  getSelectedBoardTasks(){
    return 'Multiple tasks returned from service';
  }
}