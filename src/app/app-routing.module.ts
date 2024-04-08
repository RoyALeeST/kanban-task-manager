import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardTasksListComponent } from '../app/components/organisms/board-tasks-list/board-tasks-list.component'
import { TestComponent } from './test/test/test.component';

const routes: Routes = [
  { path: '', component: BoardTasksListComponent },
  { path: 'home', component: BoardTasksListComponent },
  { path: 'test', component: TestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
