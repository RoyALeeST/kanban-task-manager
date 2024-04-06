import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MenuState } from '../reducers/menu.reducer';

export const selectMenuItems = (state: AppState) => state.menuState;

export const selectAllMenuItems = createSelector(
    selectMenuItems,
  (state: MenuState) => {
    return state?.menuItems;
  }
);