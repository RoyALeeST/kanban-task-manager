import { createReducer, on } from '@ngrx/store';
import { MenuItem } from '../../models/menuItem.model';
import { AddMenuItem } from '../actions/menu.actions';

export interface MenuState {
  menuItems: MenuItem[];
}


const initialState: MenuState = {menuItems: JSON.parse(window.localStorage.getItem('menuItems') || '[]')};

export const menuReducer = createReducer(initialState,
  on(AddMenuItem, (state, action) => ({menuItems: [...state.menuItems, { boardTitle: action.boardTitle, menuItemIcon: 'table_chart', menuItemType: 0 }]})),
)