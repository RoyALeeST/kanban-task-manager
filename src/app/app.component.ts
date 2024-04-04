import { Component, ViewChild } from '@angular/core';
import { ModalService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-task-manager';

  constructor(private _modalService: ModalService){

  }
  openNewDialogModal(){
    this._modalService.openNewTaskDialog();

  }
}
