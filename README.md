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
    - IMPORTANT COMPONENTS
        + InputComponent, InputTextAreaComponent => receives a custom formController so it can be reused across all app
        + InputDropdownComponent => receives a custom formController so it can be reused across all app
                                 => Receives a list of string to be displayed in DropDown
                                 => Has Output field to execute code when value changes
        + InputCheckboxComponent => receives a custom formController so it can be reused across all app
                                 => Has Output field that notifies when value has changed

### commons.module.ts
    Contains components common trough app navigation like sidenav and header
    - IMPORTANT COMPONENTS
        + SidenavLinkComponent => Component used in sidenav to display boards and add buttons as needed

### board.module.ts
    Contains components related to loading board information and displaying them, such as the drag and drop columns
    - IMPORTANT COMPONENTS
        + BoardTasksListComponent => Component that handles display of Tasks

### task.module.ts
    Contains components related to tasks and task management like Task cards and molecules displayed in these cards
    - IMPORTANT COMPONENTS
        + TaskCardComponent => Displays Board Details onClick
                            => Updates accordingly when subtasks status changes

### dialogs.module.ts
    Contains all dialogs used in app, like dialog for creating a new board, adding a task and displaying task details
    - IMPORTANT COMPONENTS
        + NewTaskDialogComponent => Creates a task and adds it to selected Board
        + TaskDetailsDialogComponent => Updates status for a task and their respective subtasks, UI design had no close button so it closes when clicking outside of dialog, when closed, UI gets updated accordingly

### material.module.ts
    Contains all angular material components
    - For more information please refer to [Angular Material Documentation](https://material.angular.io/components/categories)

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
