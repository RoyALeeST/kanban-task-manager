import { Component } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-board-tasks-list',
  templateUrl: './board-tasks-list.component.html',
  styleUrl: './board-tasks-list.component.scss'
})
export class BoardTasksListComponent {

  todo: Task[] = [
    {taskTitle: 'Get to work', subTasksList:[
                                              {status: true, description: 'Description1'},
                                              {status: false, description: 'Description2'},
                                              {status: true, description: 'Description3'},
                                            ]},
    {taskTitle: 'Pick up groceries', subTasksList:[
                                                {status: true, description: 'Description1'},
                                                {status: false, description: 'Description2'},
                                                {status: true, description: 'Description3'},
                                              ]},
    {taskTitle: 'Go home', subTasksList:[]},
    {taskTitle: 'Walk Dog', subTasksList:[]},
    {taskTitle: 'Stretch', subTasksList:[]},
    {taskTitle: 'Code Stuff', subTasksList:[
                                            {status: true, description: 'Description1'},
                                            {status: false, description: 'Description2'},
                                            {status: true, description: 'Description3'},
                                          ]},
    {taskTitle: 'Drag Stuff', subTasksList:[]},
    {taskTitle: 'Drop Stuff', subTasksList:[]},
    {taskTitle: 'Run', subTasksList:[]},
    {taskTitle: 'Walk', subTasksList:[]},
  ];

  doing: Task[] = [
    {taskTitle: 'Take a shower', subTasksList:[]},
    {taskTitle: 'Check e-mail', subTasksList:[]},
    {taskTitle: 'Walk dog', subTasksList:[]},
  ];

  done: Task[] = [
    {taskTitle: 'Get up', subTasksList:[]},
    {taskTitle: 'Brush teeth', subTasksList:[]},
  ];

}
