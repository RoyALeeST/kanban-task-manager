import { createReducer, on } from '@ngrx/store';
import { AddTask } from '../actions/tasks.actions';
import { Board } from '../../models/board.model';

export interface BoardsState {
  boards: Board[];
  selectedBoardTitle: string;
}


const initialState: BoardsState = {
    boards: JSON.parse(window.localStorage.getItem('boards') || '[]',),
    selectedBoardTitle: '',

};

export const taskReducer = createReducer(initialState,
    on(AddTask, (state, action) => ({
        selectedBoardTitle: action.boardTitle,
        boards: [...state.boards, { boardTitle: action.boardTitle, 
                                    tasksList: []
                                    }]}
    )),
)