import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './modules/material.module';
import { AtomsModule } from './modules/atoms.module';

import { SidenavComponent } from './components/organisms/sidenav/sidenav.component';
import { SidenavLinkComponent } from './components/molecules/sidenav-link/sidenav-link.component';
import { DragDropColumnComponent } from './components/atoms/drag-drop-column/drag-drop-column.component';
import { TaskCardComponent } from './components/molecules/task-card/task-card.component';
import { BoardTasksListComponent } from './components/organisms/board-tasks-list/board-tasks-list.component';
import { BoardTaskColumnComponent } from './components/organisms/board-task-column/board-task-column.component';
import { TaskCardTitleComponent } from './components/atoms/task-card-title/task-card-title.component';
import { NewTaskDialogComponent } from './components/molecules/dialogs/new-task-dialog/new-task-dialog.component';
import { NewBoardDialogComponent } from './components/molecules/dialogs/new-board-dialog/new-board-dialog.component';
import { TaskDetailsDialogComponent } from './components/molecules/dialogs/task-details-dialog/task-details-dialog.component';
import { InputComponent } from './components/atoms/input/input.component';
import { InputDropdownComponent } from './components/atoms/input-dropdown/input-dropdown.component';
import { InputTextAreaComponent } from './components/atoms/input-text-area/input-text-area.component';
import { InputCheckboxComponent } from './components/atoms/input-checkbox/input-checkbox.component';
import { TaskDetailsStatusTogglerComponent } from './components/molecules/task-details-status-toggler/task-details-status-toggler.component';
import { TaskDetailsDescriptionComponent } from './components/atoms/task-details-description/task-details-description.component';



// NGRX Imports
import { reducers } from './states/reducers';
import { todoReducer } from './test/reducer';
import { menuReducer } from './states/reducers/menu.reducer';


import { StoreModule } from '@ngrx/store';
import { TestComponent } from './test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,
    DragDropColumnComponent,
    TaskCardComponent,
    BoardTasksListComponent,
    BoardTaskColumnComponent,
    TaskCardTitleComponent,
    NewTaskDialogComponent,
    NewBoardDialogComponent,
    TaskDetailsDialogComponent,
    InputComponent,
    InputDropdownComponent,
    InputTextAreaComponent,
    InputCheckboxComponent,
    TaskDetailsStatusTogglerComponent,
    TaskDetailsDescriptionComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AtomsModule,
    StoreModule.forRoot(reducers)
  ],
  exports:[
    SidenavComponent,
    SidenavLinkComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
