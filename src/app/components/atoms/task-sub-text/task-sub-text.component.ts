import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-sub-text',
  templateUrl: './task-sub-text.component.html',
  styleUrl: './task-sub-text.component.scss'
})
export class TaskSubTextComponent {
  @Input()  subTasksStatusString: string = '';

}
