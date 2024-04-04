import { Task } from "./task.model";

export interface Board {
    boardTitle: string;
    tasksList: Task[];
}