import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../../models/task.model';
import { ModalService } from '../../../services/modal-service.service';
import { TaskService, TaskDialogChangeEvent } from '../../../services/task.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent implements OnInit, OnDestroy{
  @Input() task: Task;
  @Input() taskIndex: number;
  @Input() parentColumnId: string;
  unsubscribe: Subject<void> = new Subject(); // Subject for unsubscribing when component gets destroyed

  subTasksStatusString: string = '';
  constructor(private _modalService: ModalService,
              private _taskService: TaskService
  ){}

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {

    this._taskService.subTaskStatusChanged$
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (subTaskDialogChangeEvent: TaskDialogChangeEvent)=>{
        if(this.parentColumnId == subTaskDialogChangeEvent.parentColumnId && this.taskIndex == subTaskDialogChangeEvent.parentTaskIndex){// If updated subtaskBelongs to this Task then proceed else ignore it
          this.task = subTaskDialogChangeEvent.changedTask; // update current task
          this.updateSubtaskTextOfCompletedSubTasks();
          // Tell Service to save new status for subtask
          this._taskService.updateTask(subTaskDialogChangeEvent);
          // Tell Column Components to update their respective lists
        }
      }
    })

    this.updateSubtaskTextOfCompletedSubTasks();
  }

  updateSubtaskTextOfCompletedSubTasks(){
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
    this._modalService.openTaskDetailsDialog(this.task, this.taskIndex, this.parentColumnId);
  }
}
