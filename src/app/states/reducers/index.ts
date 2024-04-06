import { todoReducer } from '../../test/reducer';
import { menuReducer } from './menu.reducer';
import { boardReducer } from './board.reducer';

export const reducers = {
  menuState: menuReducer,
  todoState: todoReducer,
  boardState: boardReducer

};
