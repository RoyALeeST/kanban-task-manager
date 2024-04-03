import { SubTask } from "./subTasks.model";

export interface Task {
    taskTitle: string;
    subTasksList: SubTask[];
}