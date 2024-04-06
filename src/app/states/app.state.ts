
import { MenuState } from "../states/reducers/menu.reducer";
import { BoardsState } from "../states/reducers/board.reducer";

export interface AppState {
    menuState: MenuState;
    boardState: BoardsState;
}