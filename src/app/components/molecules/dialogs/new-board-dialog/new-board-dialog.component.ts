import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../services/modal-service.service';

@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrl: './new-board-dialog.component.scss'
})
export class NewBoardDialogComponent {
  newBoardForm: FormGroup;

  constructor(private fb: FormBuilder, private _modalService: ModalService) {
    this.newBoardForm = fb.group({
      boardTitle: ['', [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.newBoardForm.value['boardTitle'].trim());
    this._modalService.close();
  }
}
