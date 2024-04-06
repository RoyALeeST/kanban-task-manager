import { Task } from "./task.model";

export interface Board {
    boardTitle: string;
    toDoTasksList: Task[];
    inProgressTasksList: Task[];
    doneTasksList: Task[];

}