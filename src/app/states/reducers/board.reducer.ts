import { createReducer, on } from '@ngrx/store';
import { AddBoard, AddToDoTaskToBoard } from '../actions/board.actions';
import { Board } from '../../models/board.model';

export interface BoardsState {
  boards: Board[];
  selectedBoardTitle: string;
}


const initialState: BoardsState = {
    boards: JSON.parse(window.localStorage.getItem('boards') || '[]',),
    selectedBoardTitle: '',

};

export const boardReducer = createReducer(initialState,
  on(AddBoard, (state, action) => ({selectedBoardTitle: action.boardTitle ,boards: [...state.boards, { boardTitle: action.boardTitle, 
                                                                                                      tasksList: []                                                                                                    }
                                                                                    ]
                                    }
                                  )),
  on(AddToDoTaskToBoard, (state, action)=>({selectedBoardTitle: '' ,
                                            boards: [...state.boards.slice(0,action.boardIndex), // add all previous boards up tot he modified index
                                                        { boardTitle: state.boards[action.boardIndex].boardTitle, 
                                                          tasksList: [...state.boards[action.boardIndex].tasksList, action.taskToAdd]},
                                                     ...state.boards.slice(action.boardIndex +1)]// Add remaining boards
    }
  ))
)