import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./todo/todoSlice";
import { rootReducer } from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";


// const persistedState =  localStorage.getItem("todos")
//   ? JSON.parse(localStorage.getItem("todos") || "[]")
//   : {};


export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // optonal
});
// console.log(store.getState());

// store.subscribe(() => {
//   localStorage.setItem("todos", JSON.stringify(store.getState()));
// });

