import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../modules/atoms.module';
import { TaskModule } from './task.module';
import { DialogsModule } from './dialogs.module';

import { DragDropColumnComponent } from '../components/atoms/drag-drop-column/drag-drop-column.component';
import { BoardTasksListComponent } from '../components/organisms/board-tasks-list/board-tasks-list.component';
import { BoardTaskColumnComponent } from '../components/organisms/board-task-column/board-task-column.component';

@NgModule({
  declarations: [
    DragDropColumnComponent,
    BoardTasksListComponent,
    BoardTaskColumnComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AtomsModule,
    TaskModule,
    DialogsModule,
  ],
  exports:[
    DragDropColumnComponent,
    BoardTasksListComponent,
    BoardTaskColumnComponent
  ],
})
export class BoardModule { }
