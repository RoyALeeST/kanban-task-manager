import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task.model';
import { TASK_STATUS, COLUMN_ID } from '../../../models/constants/taskStatus.model';
import { DraggedTaskData, TaskDialogChangeEvent, TaskService } from '../../../services/task.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-drag-drop-column',
  templateUrl: './drag-drop-column.component.html',
  styleUrl: './drag-drop-column.component.scss'
})
export class DragDropColumnComponent implements OnInit, OnDestroy{

  @Input() columnTitle: string = '';
  @Input() tasksList: Task[] = [];
  @Input() columnId: string;
  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed

  constructor(private _taskService: TaskService){}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) { // drag and drop on same array
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.container.id == COLUMN_ID.TO_DO){ // if dropping on todo list
        event.previousContainer.data[event.previousIndex].taskStatus = TASK_STATUS.TO_DO;
      } else if (event.container.id == COLUMN_ID.DOING){ // if dropping in doing list
        event.previousContainer.data[event.previousIndex].taskStatus = TASK_STATUS.DOING;
      } else if(event.container.id == COLUMN_ID.DONE){ // if dropping on done list
        event.previousContainer.data[event.previousIndex].taskStatus = TASK_STATUS.DONE;
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      let draggedTaskData: DraggedTaskData = {
        draggedIndex: event.previousIndex,
        droppedIndex: event.currentIndex,
        destinationListId: event.container.id,
        originList: event.previousContainer.id,
        draggedTask: event.container.data[event.currentIndex]
      }
      this._taskService.updateDraggedTaskInBoard(draggedTaskData);
    }
  }
}