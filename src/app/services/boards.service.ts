import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private selectedBoardChanged = new Subject<any>();
  selectedBoardChanged$ = this.selectedBoardChanged.asObservable();
  
  constructor() { }

  saveBoard(boardsData: Board[]){
    const boardsStored = window.localStorage.getItem('boards');
    let boards = [];
    if (boardsStored !== null) {
      boards = JSON.parse(boardsStored);
    }
    // console.log(boards);
    boards.push(boardsData.pop());
    window.localStorage.setItem('boards', JSON.stringify(boards));


  }

  loadBoard(boardTitle: string){
    let boardsData = JSON.parse(window.localStorage.getItem('boards') || '[]');
    if (boardsData === null) {
      boardsData = {};
    }
    const foundBoard = boardsData.find((boardToLoad: Board) => boardToLoad.boardTitle == boardTitle);
    this.notifyBoardChanged(foundBoard);
  }

  notifyBoardChanged(foundBoard: Board){
    this.selectedBoardChanged.next(foundBoard);
  }
}
