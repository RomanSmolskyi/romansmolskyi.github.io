import { ITodoState, todos } from "./todo/todoSlice";

import { combineReducers } from "redux";

export interface IAppState {
  todos: ITodoState;
}

export const rootReducer = combineReducers<IAppState>({
  todos,
});
