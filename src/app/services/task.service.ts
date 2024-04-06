import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  getTasks() {
    let tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}');
    if (tasks === null) {
      tasks = [];
    }
    return tasks;
  }

  addTask(newTask: Task) {
    const tasksStored = window.localStorage.getItem('tasks');
    let tasks: Task[] = [];
    if (tasksStored !== null) {
      tasks = JSON.parse(tasksStored);
    }
    const tempTask: Task = {
      taskTitle: newTask.taskTitle,
      taskDescription: newTask.taskDescription,
      subTasksList: newTask.subTasksList,
    };


    tasks.push(newTask);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  deleteTask(deleteTask: Task) {
    const tasks = JSON.parse(window.localStorage.getItem('tasks') || '{}');
    const saved = tasks.filter((item: Task) => {
      return item.taskTitle !== deleteTask.taskTitle;
    });
    window.localStorage.setItem('tasks', JSON.stringify(saved));
  }

}
