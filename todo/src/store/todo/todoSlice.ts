import { ITodoData } from "./../../components/App/App";
import { createAction, createSlice } from "@reduxjs/toolkit";

export interface ITodoState {
  todoData: ITodoData[] | [];
}

const initialState: ITodoState = {
  todoData: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask(state: ITodoState, action) {
      const copy: ITodoData[] = [...state.todoData];
      copy.push(action.payload);
      state.todoData = copy;
    },
    removeTask(state: ITodoState, action) {
      state.todoData = state.todoData.filter((el) => el.id !== action.payload);
    },
    doneTask(state: ITodoState, action) {
      state.todoData = state.todoData.map((el) => {
        if (el.id === action.payload.id) {
          el.done = !el.done;
          el.dateDone = el.done ? action.payload.toLocalDateStr : null;
        }
        return el;
      });
    },
    doImportant(state: ITodoState, action) {
      state.todoData = state.todoData.map((el) => {
        if (el.id === action.payload) {
          el.important = !el.important;
          // el.label = el.label.toUpperCase();
        }

        return el;
      });
    },
    editTask(state: ITodoState, action) {
      state.todoData = state.todoData.map((el) => {
        if (el.id === action.payload.id) {
          el.label = action.payload.editValue;
          el.dateOfUpdate = action.payload.toLocalDateStr;
        }
        return el;
      });
    },
    setTasks(state: ITodoState, action) {
      state.todoData = action.payload;
    }
  },
});


export const { addNewTask, removeTask, doneTask, doImportant, editTask, setTasks } =
  todoSlice.actions;
export const todos = todoSlice.reducer;
