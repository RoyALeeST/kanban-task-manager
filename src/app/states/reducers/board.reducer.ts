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
                                                                                                      toDoTasksList: [],
                                                                                                      inProgressTasksList: [],
                                                                                                      doneTasksList: []
                                                                                                    }
                                                                                    ]
                                    }
                                  )),
  on(AddToDoTaskToBoard, (state, action)=>({selectedBoardTitle: action.boardTitle ,
                                            boards: [...state.boards, { 
                                                      boardTitle: action.boardTitle, 
                                                      toDoTasksList: [action.taskToAdd],
                                                      inProgressTasksList: [],
                                                      doneTasksList: []
                                                    }
                                                  ]
  }))
)