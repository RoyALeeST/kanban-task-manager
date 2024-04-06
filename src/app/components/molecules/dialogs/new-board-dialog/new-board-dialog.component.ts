import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../services/modal-service.service';
import { Store } from '@ngrx/store';
import { MenuItem, MenuItemType } from '../../../../models/menuItem.model';
import { Todo } from '../../../../test/interfaces';
import { Observable } from 'rxjs';
import { AddMenuItem } from '../../../../states/actions/menu.actions';
import { AddBoard} from '../../../../states/actions/board.actions';
@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrl: './new-board-dialog.component.scss'
})
export class NewBoardDialogComponent {
  newBoardForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
              private store: Store<{ menuState: Array<Todo>}>,
              private _modalService: ModalService) {
    this.newBoardForm = fb.group({
      boardTitle: ['', [Validators.required]],
    });
  }

  onSubmit(){
    let newMenuItem: MenuItem = {
      menuItemIcon: 'table_chart',
      menuItemType: MenuItemType.DISPLAY_BOARD,
      boardTitle: this.newBoardForm.value['boardTitle'].trim(),
    }
    this.handleNewBoardCreated();
    this._modalService.close();
  }

  handleNewBoardCreated() {
    let boardInfo = { boardTitle: this.newBoardForm.value['boardTitle'].trim() || 'Untitled Board' }
    this.store.dispatch(AddMenuItem(boardInfo));
    this.store.dispatch(AddBoard(boardInfo));

  }
  
}
