import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { ModalService } from '../../../services/modal-service.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
  constructor(private _modalService: ModalService){}

  showTaskDetails(){
    this._modalService.openTaskDetailsDialog(this.task);
  }
}
