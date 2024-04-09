import {createAction, props} from '@ngrx/store';

export const AddMenuItem = createAction('[Sidenav Component] Add', props<{boardTitle: string}>());
export const Remove = createAction('[Sidenav Component] Remove', props<{boardTitle: string}>());
export const Toggle = createAction('[Sidenav Component] Toggle', props<{boardTitle: string}>());