import { Injectable } from '@angular/core';
import { MenuItem, MenuItemType } from '../models/menuItem.model';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {

  saveMenuItems(newMenuItems: MenuItem[]){
    window.localStorage.setItem('menuItems', JSON.stringify(newMenuItems));
  }

  loadBoardsMenuItems(): MenuItem[]{
    let menuItems = JSON.parse(window.localStorage.getItem('menuItems') || '[]');
    if (menuItems === null) {
      menuItems = [];
    }
    return menuItems;
  }
}