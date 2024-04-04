import { Component, Input, OnInit } from '@angular/core';
import { SubTask } from '../../../models/subTasks.model';

@Component({
  selector: 'app-task-sub-text',
  templateUrl: './task-sub-text.component.html',
  styleUrl: './task-sub-text.component.scss'
})
export class TaskSubTextComponent implements OnInit {
  @Input() subTasks: SubTask[];
  subTasksStatusString: string = '';

  ngOnInit(): void {
    let completedSubtasks: number = 0;
    for (let i = 0; i < this.subTasks?.length; i++) {
      const element = this.subTasks[i];
      if(element.status){
        completedSubtasks++;
      }
    }
    this.subTasksStatusString = `${completedSubtasks} of ${this.subTasks.length} subTasks`;
  }
}
