import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { BoardService } from '../../../services/boards.service';
import { MenuState } from '../../../states/reducers/menu.reducer';
import { BoardsState } from '../../../states/reducers/board.reducer';
import { selectBoardTask, selectBoard } from '../../../states/selectors/board.selector';
import { Board } from '../../../models/board.model';
import { TASK_STATUS, COLUMN_ID } from '../../../models/constants/taskStatus.model';
import { TaskService, TaskDialogChangeEvent } from '../../../services/task.service';

@Component({
  selector: 'app-board-tasks-list',
  templateUrl: './board-tasks-list.component.html',
  styleUrl: './board-tasks-list.component.scss'
})
export class BoardTasksListComponent implements OnInit, OnDestroy {
  readonly toDoId = COLUMN_ID.TO_DO;
  readonly doingId = COLUMN_ID.DOING;
  readonly doneId = COLUMN_ID.DONE;

  todo: Task[] = [];
  done: Task[] = [];
  doing: Task[] = [];

  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed


  constructor(private _boardService: BoardService,
              private _taskService: TaskService, 
              private store: Store<{ menuState: MenuState, boardState: BoardsState }>) 
  {

    this.todo = [];
    this.done = [];
    this.doing = [];

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

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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
            
            self.todo = self.todo ? [...self.todo, newTask] : [newTask] // Trigegrs change detection 
            break; 
          } 
          case TASK_STATUS.DOING: { 
            self.doing = self.doing ? [...self.doing, newTask] : [newTask]// Trigegrs change detection
             break; 
          } 
          case TASK_STATUS.DONE: { 
            self.done = self.done ? [...self.done, newTask] : [newTask]// Trigegrs change detection
            break; 
         } 
          default: { 
             break; 
          } 
       } 
      }
    });

    this._taskService.taskStatusChanged$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (subTaskDialogChangeEvent: TaskDialogChangeEvent)=>{
        console.log(subTaskDialogChangeEvent);
        if(subTaskDialogChangeEvent.changedTask.taskStatus == TASK_STATUS.TO_DO){ // Manually changed in dialog for task details the status of task to TO_DO
          self.todo = self.todo ? [...self.todo, subTaskDialogChangeEvent.changedTask] : [subTaskDialogChangeEvent.changedTask] // Add to respective array and Triggers change detection 
        } else if(subTaskDialogChangeEvent.changedTask.taskStatus == TASK_STATUS.DOING){// Manually changed in dialog for task details the status of task to DOING
          self.doing = self.doing ? [...self.doing, subTaskDialogChangeEvent.changedTask] : [subTaskDialogChangeEvent.changedTask] // Add to respective array and Triggers change detection 
        }else if(subTaskDialogChangeEvent.changedTask.taskStatus == TASK_STATUS.DONE){// Manually changed in dialog for task details the status of task to DONE
          self.done = self.done ? [...self.done, subTaskDialogChangeEvent.changedTask] : [subTaskDialogChangeEvent.changedTask] // Add to respective array and Triggers change detection 
        }
        this.removeSpecifiedTaskFromArray(subTaskDialogChangeEvent.parentColumnId, subTaskDialogChangeEvent.changedTask);
      }
    })  
  }


  filterSubTasksArray(boardToLoad: Board){
    const groupedTasks = groupBy(boardToLoad?.tasksList,  i => i.taskStatus);
    // Use this sintax because groupBy return Undefined if nothing was found so on this scenario we get an empty array instead
    this.doing = groupedTasks[TASK_STATUS.DOING] ? groupedTasks[TASK_STATUS.DOING] : []; 
    this.done = groupedTasks[TASK_STATUS.DONE] ? groupedTasks[TASK_STATUS.DONE] : [];
    this.todo = groupedTasks[TASK_STATUS.TO_DO] ? groupedTasks[TASK_STATUS.TO_DO] : [];
  }

  removeSpecifiedTaskFromArray(columnId: string, taskToRemove: Task){
    if(columnId == COLUMN_ID.TO_DO){
      this.todo.splice(this._taskService.getUpdatedTaskIndex(this.todo, taskToRemove), 1);
    } else if(columnId == COLUMN_ID.DOING){
      this.doing.splice(this._taskService.getUpdatedTaskIndex(this.doing, taskToRemove), 1);
    }else if(columnId == COLUMN_ID.DONE){
      this.done.splice(this._taskService.getUpdatedTaskIndex(this.done, taskToRemove), 1);
    }
  }

}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);