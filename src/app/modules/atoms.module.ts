import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuItemsTextComponent } from '../components/atoms/menu-items-text/menu-items-text.component';
import { MenuItemIconComponent } from '../components/atoms/menu-item-icon/menu-item-icon.component';
import { MainButtonComponent } from '../components/atoms/main-button/main-button.component';
import { TitleTextComponent } from '../components/atoms/title-text/title-text.component';
import { TaskColumnStatusIconComponent } from '../components/atoms/task-column-status-icon/task-column-status-icon.component';
import { TaskSubTextComponent } from '../components/atoms/task-sub-text/task-sub-text.component';
import { InputComponent } from '../components/atoms/input/input.component';
import { InputDropdownComponent } from '../components/atoms/input-dropdown/input-dropdown.component';
import { InputTextAreaComponent } from '../components/atoms/input-text-area/input-text-area.component';
import { InputCheckboxComponent } from '../components/atoms/input-checkbox/input-checkbox.component';

@NgModule({
  declarations: [
    MenuItemsTextComponent,
    MenuItemIconComponent,
    MainButtonComponent,
    TitleTextComponent,
    TaskColumnStatusIconComponent,
    TaskSubTextComponent,
    InputComponent,
    InputDropdownComponent,
    InputTextAreaComponent,
    InputCheckboxComponent,
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MenuItemsTextComponent,
    MenuItemIconComponent,
    MainButtonComponent,
    TitleTextComponent,
    TaskColumnStatusIconComponent,
    TaskSubTextComponent,
    InputComponent,
    InputDropdownComponent,
    InputTextAreaComponent,
    InputCheckboxComponent,
    ],
  providers: [
  ],
})
export class AtomsModule { }
