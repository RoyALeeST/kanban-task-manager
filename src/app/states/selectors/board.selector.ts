import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BoardsState } from '../reducers/board.reducer';
import { Board } from '../../models/board.model';

export const selectBoards = (state: AppState) => state.boardState;

export const selectAllBoards = createSelector(
    selectBoards,
  (state: BoardsState) => {
    return state?.boards;
  }
);
export const selectBoardTitle = (state: AppState) => state.boardState.selectedBoardTitle;

export const selectBoard = createSelector(
  selectAllBoards,
  selectBoardTitle,
  (boards: Board[], selectedBoardTitle: string) => {
      if (boards && selectedBoardTitle) {
      return boards.filter((boards: Board) => boards.boardTitle === selectedBoardTitle);
      } else {
      return [];
      }
  }
);

export const selectBoardTask = createSelector(
  selectBoard,
  (boards: Board[]) => {
      if (boards) {
      return boards;
      } else {
      return [];
      }
  }
);