import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './modules/material.module';
import { AtomsModule } from './modules/atoms.module';
import { TaskModule } from './modules/task.module';
import { DialogsModule } from './modules/dialogs.module';
import { BoardModule } from './modules/board.module';
import { CommonsModule } from './modules/commons.module';

// NGRX Imports
import { StoreModule } from '@ngrx/store';
import { reducers } from './states/reducers';

import { BoardResolverService } from './services/resolvers/board-resolver.service'


import { LineTroughTextDirective } from './directives/line-trough-text.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AtomsModule,
    TaskModule,
    DialogsModule,
    BoardModule,
    CommonsModule,
    StoreModule.forRoot(reducers)
  ],
  exports:[
  ],
  providers: [
    provideAnimationsAsync(),
    BoardResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
