import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-details-description',
  templateUrl: './task-details-description.component.html',
  styleUrl: './task-details-description.component.scss'
})
export class TaskDetailsDescriptionComponent {
  @Input() taskDescription:string;
  @Input() taskDetailStatus:boolean = false;

}
