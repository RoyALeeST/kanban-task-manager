import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card-title',
  templateUrl: './task-card-title.component.html',
  styleUrl: './task-card-title.component.scss'
})
export class TaskCardTitleComponent {
  @Input() taskTitle: string;
}
