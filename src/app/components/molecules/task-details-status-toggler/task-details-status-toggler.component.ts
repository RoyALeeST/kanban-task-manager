import { Component, Input, OnInit } from '@angular/core';
import { SubTask } from '../../../models/subTasks.model';

@Component({
  selector: 'app-task-details-status-toggler',
  templateUrl: './task-details-status-toggler.component.html',
  styleUrl: './task-details-status-toggler.component.scss'
})
export class TaskDetailsStatusTogglerComponent implements OnInit{
  @Input() subtask: SubTask;
  
  ngOnInit(): void {
    console.log(this.subtask)
  }
}
