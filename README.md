# KanbanTaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server
Run `npm install` to install al required dependencies.
Project is just using native Typescript, `RxJs` to showcase state management and `@angular/cdk/drag-drop`
Once all dependencies are installed run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`.

## How To Use

App will load Dummy data if no boards are found HOWEVER because all these are Dummy data no menu item is added for the Dummy Board, instead the user can create a new Board if he clicks on the `Add new Board` Button on the left sidenav.
Once in a Board the user is able to add Tasks as needed if he clicks on the upper right button `Add New Task`.
Users can drag and drop Tasks between columns and their status will be persistent betwwen sessions, this was achieved with `localStorage`.
If the user clicks on a Task, a dialog showing Task details will open where the user can change the sattus of the Task, these changes will be reflected on the UI as well.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
