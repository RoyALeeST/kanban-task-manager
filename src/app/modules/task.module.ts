import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../modules/atoms.module';

import { TaskCardComponent } from '../components/molecules/task-card/task-card.component';
import { TaskCardTitleComponent } from '../components/atoms/task-card-title/task-card-title.component';
import { TaskDetailsStatusTogglerComponent } from '../components/molecules/task-details-status-toggler/task-details-status-toggler.component';
import { TaskDetailsDescriptionComponent } from '../components/atoms/task-details-description/task-details-description.component';

import { LineTroughTextDirective } from '../directives/line-trough-text.directive';

@NgModule({
  declarations: [
    LineTroughTextDirective,
    TaskCardComponent,
    TaskCardTitleComponent,
    TaskDetailsStatusTogglerComponent,
    TaskDetailsDescriptionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AtomsModule
  ],
  exports:[
    LineTroughTextDirective,
    TaskCardComponent,
    TaskCardTitleComponent,
    TaskDetailsStatusTogglerComponent,
    TaskDetailsDescriptionComponent,
  ],
})
export class TaskModule { }
