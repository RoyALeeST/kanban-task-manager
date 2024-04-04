import { Component, Input } from '@angular/core';
import { SubTask } from '../../../models/subTasks.model';

@Component({
  selector: 'app-task-details-status-toggler',
  templateUrl: './task-details-status-toggler.component.html',
  styleUrl: './task-details-status-toggler.component.scss'
})
export class TaskDetailsStatusTogglerComponent {
  @Input() subtask: SubTask;
}
