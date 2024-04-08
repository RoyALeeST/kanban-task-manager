import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../interfaces';
import { Add, Remove, Toggle } from '../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  todos$: Observable<Todo[]>;
  newTodoText: string = "";
  constructor(private store: Store<{ todoState: Array<Todo> }>) {
    this.todos$ = store.select(state => state.todoState);
  }
  addTodo() {
    this.store.dispatch(Add({ text: this.newTodoText || 'Untitled task' }));
    this.newTodoText = '';
  }

  removeTodo(id: string) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id: string) {
    this.store.dispatch(Toggle({ id }));
  }
}
