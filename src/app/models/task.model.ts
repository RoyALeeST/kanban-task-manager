import { SubTask } from "./subTasks.model";

export interface Task {
    taskTitle: string;
    taskDescription: string;
    subTasksList: SubTask[];
}