import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardTasksListComponent } from '../app/components/organisms/board-tasks-list/board-tasks-list.component'
import { BoardResolverService } from './services/resolvers/board-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  {
    path: 'home',
    component: BoardTasksListComponent,
    resolve: {
      preloadedData: BoardResolverService
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
