import { SubTask } from "./subTasks.model";

export class Task {
    taskTitle: string;
    taskDescription: string;
    subTasksList: SubTask[] = [];
    taskStatus: string;
}