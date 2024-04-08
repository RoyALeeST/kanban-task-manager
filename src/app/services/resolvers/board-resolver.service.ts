import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import { TASK_STATUS } from '../../models/constants/taskStatus.model'
import { Board } from '../../models/board.model';
@Injectable()
export class BoardResolverService implements Resolve<any> {
  constructor() { }

  /**
   * resolve method
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot) {

    const boardsStored = window.localStorage.getItem('boards');
    let preloadedBoard: Board[] = [];
    if (boardsStored !== null) {
      console.log('boards found')
        preloadedBoard = JSON.parse(boardsStored);
        return preloadedBoard;
    } else {

        let todo: Task[] = [
            {taskTitle: 'Get to work',
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
                          {status: true, description: 'Description1'},
                          {status: false, description: 'Description2'},
                          {status: true, description: 'Description3'},
                        ]},
            {taskTitle: 'Pick up groceries',
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
                          {status: true, description: 'Description1'},
                          {status: false, description: 'Description2'},
                          {status: true, description: 'Description3'},
                        ]},
            {taskTitle: 'Go home',
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Walk Dog', 
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Stretch', 
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Code Stuff', 
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
                          {status: true, description: 'Description1'},
                          {status: false, description: 'Description2'},
                          {status: true, description: 'Description3'},
                        ]},
            {taskTitle: 'Drag Stuff', 
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
            {taskTitle: 'Drop Stuff',
            taskStatus: TASK_STATUS.TO_DO,     
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
            {taskTitle: 'Run', 
            taskStatus: TASK_STATUS.TO_DO,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Walk',
            taskStatus: TASK_STATUS.TO_DO, 
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
          ];
        
          let doing: Task[] = [
            {taskTitle: 'Take a shower',
            taskStatus: TASK_STATUS.DOING,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
            {taskTitle: 'Check e-mail',
            taskStatus: TASK_STATUS.DOING,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Walk dog',
            taskStatus: TASK_STATUS.DOING,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
          ];
        
          let done: Task[] = [
            {taskTitle: 'Get up',
            taskStatus: TASK_STATUS.DONE,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[
              {status: true, description: 'Description1'},
              {status: false, description: 'Description2'},
              {status: true, description: 'Description3'},
            ]},
            {taskTitle: 'Brush teeth',
            taskStatus: TASK_STATUS.DONE,
            taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, nulla quis condimentum vulputate, turpis neque eleifend ex, sit amet gravida augue ligula ut velit.',
            subTasksList:[]},
          ];
        
          preloadedBoard = [{
            boardTitle: 'Preloaded Board',
            tasksList: [...todo, ...doing, ...done]
          }]
        
            return preloadedBoard;
    }

      

  }

}
