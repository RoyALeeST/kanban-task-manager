# KanbanTaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server
Run `npm install` to install all required dependencies.
Project is just using native Typescript, `RxJs` to showcase state management and `@angular/cdk/drag-drop`
Also for deployment some dependencies had to be installes such as `Express` and  `Cors`
Once all dependencies are installed run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`.

## How To Use

App will load Dummy data if no boards are found HOWEVER because all these are Dummy data no menu item is added for the Dummy Board, instead the user can create a new Board if he clicks on the `Add new Board` Button on the left sidenav.
Once in a Board the user is able to add Tasks as needed if he clicks on the upper right button `Add New Task`.
Users can drag and drop Tasks between columns and their status will be persistent betwwen sessions, this was achieved with `localStorage`.
If the user clicks on a Task, a dialog showing Task details will open where the user can change the sattus of the Task, these changes will be reflected on the UI as well.

## Comments

App is divided into multiple modules.

### atoms.module.ts
    Contains all atomic elements like titles, text, inputs
### commons.module.ts
    Contains components common trough app navigation like sidenav and header
### board.module.ts
    Contains components related to loading board information and displaying them, such as the drag and drop columns
### task.module.ts
    Contains components related to tasks and task management like Task cards and molecules displayed in these cards
### dialogs.module.ts
    Contains all dialogs used in app, like dialog for creating a new board, adding a task and displaying task details
### material.module.ts
    Contains all angular material components

### /states
    Contails all Rxjs files, not all of them are used as I wanted to showcase Observables and Subscriptions.
    Files Used are for Board data. Tasks are handles with subscriptions and Observables

### Improvements
    - If willing, all subscriptions can be replaced for NgRx HOWEVER for the purpose of this exercice I consider using NgRx is like trying to cook an omelette with a canon.
    - Feature to add more columns and task statuses as needed.
    - Add a DB for storage rather than local storage
    - Configuration file for proxy to accept http requests

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
