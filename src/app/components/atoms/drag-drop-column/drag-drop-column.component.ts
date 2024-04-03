import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-drag-drop-column',
  templateUrl: './drag-drop-column.component.html',
  styleUrl: './drag-drop-column.component.scss'
})
export class DragDropColumnComponent {

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
