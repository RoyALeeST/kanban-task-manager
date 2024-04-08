import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import { SubTask } from '../models/subTasks.model';
import { Board } from '../models/board.model';
import { BoardService } from './boards.service';


export interface TaskDialogChangeEvent{
  parentTaskIndex: number;
  parentColumnId: string;
  changedTask: Task;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private subTaskStatusChanged = new Subject<TaskDialogChangeEvent>();
  subTaskStatusChanged$ = this.subTaskStatusChanged.asObservable();

  private taskStatusChanged = new Subject<TaskDialogChangeEvent>();
  taskStatusChanged$ = this.taskStatusChanged.asObservable();

  constructor(private _boardService: BoardService) {}

  updateTask(subTaskDialogChangeEvent: TaskDialogChangeEvent){
    // Save new task status in local storage
    let boardsData: Board[] = JSON.parse(window.localStorage.getItem('boards') || '[]');
    if (boardsData === null) {
      boardsData = [];
    }
    console.log(this._boardService.getSelectedBoardIndex());

    // Todo find respective index of modified sub task
    let indefOfTaskToUpdate = this.getUpdatedTaskIndex(boardsData[this._boardService.getSelectedBoardIndex()].tasksList, subTaskDialogChangeEvent.changedTask)
    boardsData[this._boardService.getSelectedBoardIndex()].tasksList[indefOfTaskToUpdate] = subTaskDialogChangeEvent.changedTask;
    window.localStorage.setItem('boards', JSON.stringify(boardsData));

    //notify components to update respectively
    this.taskStatusChanged.next(subTaskDialogChangeEvent);

  }

  getUpdatedTaskIndex(taskList: Task[], taskToFind: Task){
    return taskList.findIndex(i => i.taskTitle == taskToFind.taskTitle);
  }

  notifySubTaskStatusChanged(subTaskDialogChangeEvent: TaskDialogChangeEvent){
    this.subTaskStatusChanged.next(subTaskDialogChangeEvent);
  }
}
