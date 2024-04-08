import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';
import { ModalService } from '../../../services/modal-service.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit{
  @Input() task: Task;
  subTasksStatusString: string = '';
  constructor(private _modalService: ModalService){}

  ngOnInit(): void {
    let completedSubtasks: number = 0;
    for (let i = 0; i < this.task.subTasksList?.length; i++) {
      const element = this.task.subTasksList[i];
      if(element.status){
        completedSubtasks++;
      }
    }
    this.subTasksStatusString = `${completedSubtasks} of ${this.task.subTasksList?.length} subTasks`;
  }

  showTaskDetails(){
    this._modalService.openTaskDetailsDialog(this.task);
  }
}
