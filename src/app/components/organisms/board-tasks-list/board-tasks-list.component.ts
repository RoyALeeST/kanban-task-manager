import { Component } from '@angular/core';
import { Task } from '../../../models/task.model';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { BoardService } from '../../../services/boards.service';
import { MenuState } from '../../../states/reducers/menu.reducer';
import { BoardsState } from '../../../states/reducers/board.reducer';
import { selectAllBoards, selectBoard } from '../../../states/selectors/board.selector';
import { Board } from '../../../models/board.model';

@Component({
  selector: 'app-board-tasks-list',
  templateUrl: './board-tasks-list.component.html',
  styleUrl: './board-tasks-list.component.scss'
})
export class BoardTasksListComponent {

  todo: Task[] = [
    {taskTitle: 'Get to work', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
                  {status: true, description: 'Description1'},
                  {status: false, description: 'Description2'},
                  {status: true, description: 'Description3'},
                ]},
    {taskTitle: 'Pick up groceries',
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
                  {status: true, description: 'Description1'},
                  {status: false, description: 'Description2'},
                  {status: true, description: 'Description3'},
                ]},
    {taskTitle: 'Go home',
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Walk Dog', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Stretch', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Code Stuff', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
                  {status: true, description: 'Description1'},
                  {status: false, description: 'Description2'},
                  {status: true, description: 'Description3'},
                ]},
    {taskTitle: 'Drag Stuff', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
    {taskTitle: 'Drop Stuff',     
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
    {taskTitle: 'Run', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Walk', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
  ];

  doing: Task[] = [
    {taskTitle: 'Take a shower',
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
    {taskTitle: 'Check e-mail', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Walk dog',
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
  ];

  done: Task[] = [
    {taskTitle: 'Get up',
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[
      {status: true, description: 'Description1'},
      {status: false, description: 'Description2'},
      {status: true, description: 'Description3'},
    ]},
    {taskTitle: 'Brush teeth', 
    taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
    subTasksList:[]},
  ];

  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed


  constructor(private _boardService: BoardService, 
              private store: Store<{ menuState: MenuState, boardState: BoardsState }>) 
  {
    this.store.pipe(select(selectBoard))
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (boardToAdd: Board[])=>{
        if(boardToAdd?.length > 0){
          this._boardService.saveBoard(boardToAdd);
        }
      }
    });

    this._boardService.selectedBoardChanged$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (boardToLoad: Board)=>{
        console.log(boardToLoad)
      }
    })

  }


}

