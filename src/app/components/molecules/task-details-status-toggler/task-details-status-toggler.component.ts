import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubTask } from '../../../models/subTasks.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-details-status-toggler',
  templateUrl: './task-details-status-toggler.component.html',
  styleUrl: './task-details-status-toggler.component.scss'
})
export class TaskDetailsStatusTogglerComponent{
  @Input() subtask: SubTask;
  @Input() subtaskIndex: number;
  @Input() parentTaskIndexInBoard: number;
  @Output() public subtaskCompletedStatusSelected = new EventEmitter();

  constructor(){}

  handleSubtaskStatusToggle(event: boolean){
    this.subtask.status = !this.subtask.status;
    this.subtaskCompletedStatusSelected.emit({subtaskIndex: this.subtaskIndex, updatedSubtask: this.subtask})
  }
}
