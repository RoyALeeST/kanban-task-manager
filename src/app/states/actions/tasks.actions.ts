import {createAction, props} from '@ngrx/store';
import { Task } from '../../models/task.model';

export const AddTask = createAction('[New Task Dialog] Add', props<{boardTitle: string, task: Task}>());
