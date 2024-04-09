export interface MenuItem {
    boardTitle: string;
    menuItemIcon: string;
    menuItemType: MenuItemType;
}

export enum MenuItemType {
    DISPLAY_BOARD,
    NEW_BOARD,
  }