import { NgModule } from '@angular/core';

import { MaterialModule } from '../modules/material.module';

import { MenuItemsTextComponent } from '../components/atoms/menu-items-text/menu-items-text.component';
import { MenuItemIconComponent } from '../components/atoms/menu-item-icon/menu-item-icon.component';
import { MainButtonComponent } from '../components/atoms/main-button/main-button.component';
import { TitleTextComponent } from '../components/atoms/title-text/title-text.component';
import { TaskColumnStatusIconComponent } from '../components/atoms/task-column-status-icon/task-column-status-icon.component';
import { TaskSubTextComponent } from '../components/atoms/task-sub-text/task-sub-text.component';

@NgModule({
  declarations: [
    MenuItemsTextComponent,
    MenuItemIconComponent,
    MainButtonComponent,
    TitleTextComponent,
    TaskColumnStatusIconComponent,
    TaskSubTextComponent
  ],
  imports: [
    MaterialModule
  ],
  exports:[
    MenuItemsTextComponent,
    MenuItemIconComponent,
    MainButtonComponent,
    TitleTextComponent,
    TaskColumnStatusIconComponent,
    TaskSubTextComponent
  ],
  providers: [
  ],
})
export class AtomsModule { }
