import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-task-column',
  templateUrl: './board-task-column.component.html',
  styleUrl: './board-task-column.component.scss'
})
export class BoardTaskColumnComponent {
  @Input() columnTitle: string = '';
  @Input() tasksList: Task[] = [];
  @Input() columnId: string;

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
