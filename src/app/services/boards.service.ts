import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private selectedBoardChanged = new Subject<any>();
  selectedBoardChanged$ = this.selectedBoardChanged.asObservable();

  private newTaskAdded = new Subject<Task>();
  newTaskAdded$ = this.newTaskAdded.asObservable();
  

  selectedBoard: Board | undefined;

  constructor() { }

  saveNewBoard(newBoardData: Board[]){
    const boardsStored = window.localStorage.getItem('boards');
    let boards = [];
    if (boardsStored !== null) {
      boards = JSON.parse(boardsStored);
    }
    let newBoard = newBoardData.pop();
    boards.push(newBoard);
    window.localStorage.setItem('boards', JSON.stringify(boards));
    // After saving select newly created board
    this.selectedBoard = newBoard;
  }

  addTaskToBoard(newTask: Task){
    let boardsData: Board[] = JSON.parse(window.localStorage.getItem('boards') || '[]');
    if (boardsData === null) {
      boardsData = [];
    }
    boardsData[this.getSelectedBoardIndex()].tasksList.push(newTask);
    window.localStorage.setItem('boards', JSON.stringify(boardsData));
    this.notifyNewTaskAddedToBoard(newTask);
  }

  loadBoard(boardTitle: string){
    let boardsData = JSON.parse(window.localStorage.getItem('boards') || '[]');
    if (boardsData === null) {
      boardsData = [];
    }
    const foundBoard = boardsData.find((boardToLoad: Board) => boardToLoad.boardTitle == boardTitle);
    this.notifyBoardChanged(foundBoard);
  }

  
  getSelectedBoardIndex(){
    const boardsStored = window.localStorage.getItem('boards');
    let boards: Board[] = [];
    if (boardsStored !== null) {
      boards = JSON.parse(boardsStored);
    }
    return boards.findIndex(i => i.boardTitle == this.selectedBoard?.boardTitle);
  }

  changeSelectedBoard(selectedBoardIndex: number){
    const boardsStored = window.localStorage.getItem('boards');
    let boards: Board[] = [];
    if (boardsStored !== null) {
      boards = JSON.parse(boardsStored);
    }
    this.selectedBoard = boards[selectedBoardIndex];
  }

  notifyBoardChanged(foundBoard: Board){
    this.selectedBoard = foundBoard;
    this.selectedBoardChanged.next(foundBoard);
  }

  notifyNewTaskAddedToBoard(newTask: Task){
    this.newTaskAdded.next(newTask);
  }
  
}
