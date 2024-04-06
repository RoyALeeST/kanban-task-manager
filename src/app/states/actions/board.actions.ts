import {createAction, props} from '@ngrx/store';
import { Task } from '../../models/task.model';

export const AddBoard = createAction('[New Board Dialog] Add', props<{boardTitle: string}>());
export const AddToDoTaskToBoard = createAction('[New Task Dialog] Add Task', props<{boardTitle: string, taskToAdd: Task}>());
