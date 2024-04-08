import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { BoardService } from '../../../services/boards.service';
import { MenuState } from '../../../states/reducers/menu.reducer';
import { BoardsState } from '../../../states/reducers/board.reducer';
import { selectBoardTask, selectBoard } from '../../../states/selectors/board.selector';
import { Board } from '../../../models/board.model';
import { TASK_STATUS } from '../../../models/constants/taskStatus.model';

@Component({
  selector: 'app-board-tasks-list',
  templateUrl: './board-tasks-list.component.html',
  styleUrl: './board-tasks-list.component.scss'
})
export class BoardTasksListComponent implements OnInit {

  todo: Task[] = [];
  done: Task[] = [];
  doing: Task[] = [];

  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed


  constructor(private _boardService: BoardService, 
              private store: Store<{ menuState: MenuState, boardState: BoardsState }>) 
  {
    this.store.pipe(select(selectBoard))
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (boardToAdd: Board[])=>{
        if(boardToAdd?.length > 0){
          this._boardService.saveNewBoard(boardToAdd);
        }
      }
    });

  }
  ngOnInit(): void {
    let self = this;

    this._boardService.selectedBoardChanged$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (boardToLoad: Board)=>{
        console.log(boardToLoad);
        this.filterSubTasksArray(boardToLoad);
      }
    })

    this._boardService.newTaskAdded$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (newTask: Task)=>{
        console.log(newTask);
        switch(newTask.taskStatus) { 
          case TASK_STATUS.TO_DO: { 
            self.todo = [...self.todo, newTask] // Trigegrs change detection 
            break; 
          } 
          case TASK_STATUS.DOING: { 
            self.doing = [...self.doing, newTask]// Trigegrs change detection
             break; 
          } 
          case TASK_STATUS.DONE: { 
            self.done = [...self.done, newTask]// Trigegrs change detection
            break; 
         } 
          default: { 
             break; 
          } 
       } 
      }
    })  
  }


  filterSubTasksArray(boardToLoad: Board){
    const groupedTasks = groupBy(boardToLoad?.tasksList,  i => i.taskStatus);
    this.doing = groupedTasks[TASK_STATUS.DOING];
    this.done = groupedTasks[TASK_STATUS.DONE];
    this.todo = groupedTasks[TASK_STATUS.TO_DO];
  }

}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);