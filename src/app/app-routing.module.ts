import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardTasksListComponent } from '../app/components/organisms/board-tasks-list/board-tasks-list.component'
const routes: Routes = [
  { path: '', component: BoardTasksListComponent },
  { path: 'home', component: BoardTasksListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
