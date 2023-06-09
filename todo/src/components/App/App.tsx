import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, Button } from "../shared";
import { TodoHeader } from "../TodoHeader";
import { TodoList } from "../TodoList";
import { FilterPanel } from "../FilterPanel";
import { useSetLocalStorage } from "../../utils/customHooks";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTask,
  doImportant,
  doneTask,
  removeTask,
  setTasks,
} from "../../store/todo/todoSlice";
import { IAppState } from "../../store/rootReducer";
import { DialogWindow } from "../DialogWindow";
import { toLocalDateStr } from "../../helpers";

export interface ITodoData {
  label: string;
  id: number;
  important: boolean;
  done: boolean;
  dateOfCreation: string;
  dateDone: null | string;
  dateOfUpdate: null | string;
}

interface IToggle {
  isToggleAll: boolean;
  isToggleActive: boolean;
  isToggleDone: boolean;
}

export const App = () => {
  const dispatch = useDispatch();

  const selectTodoData = (state: IAppState) => state.todos.todoData;
  const todoData = useSelector(selectTodoData);

  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState<IToggle>({
    isToggleAll: true,
    isToggleDone: false,
    isToggleActive: false,
  });
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentIdTask, setCurrentIdTask] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const todoTasksFromLocalStorage = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    dispatch(setTasks(todoTasksFromLocalStorage));
  }, [dispatch]);

  useSetLocalStorage(todoData, "todos");

  const addTask = () => {
    if (value?.trim() !== "") {
      dispatch(
        addNewTask({
          label: value,
          id: new Date().getTime() + ` ${value}`,
          important: false,
          done: false,
          dateOfCreation: toLocalDateStr,
          dateOfUpdate: null,
          dateDone: null,
        })
      );
      setValue("");
    }
  };

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const deleteItem = (id: number) => {
    dispatch(removeTask(id));
  };

  const makeImportant = (id: number) => {
    dispatch(doImportant(id));
  };

  const toggleDone = (id: number) => {
    dispatch(doneTask({ id, toLocalDateStr }));
  };

  const filterActive = () => {
    setToggle({
      isToggleAll: false,
      isToggleDone: false,
      isToggleActive: true,
    });
  };

  const filterDone = () => {
    setToggle({
      isToggleAll: false,
      isToggleDone: true,
      isToggleActive: false,
    });
  };

  const filterAll = () => {
    setToggle({
      isToggleAll: true,
      isToggleDone: false,
      isToggleActive: false,
    });
  };

  const selectedTodos = () => {
    let copyTodoData = [...todoData];

    if (searchValue?.length) {
      copyTodoData = copyTodoData.filter((el) =>
        el.label?.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (toggle.isToggleDone) {
      return copyTodoData.filter((el: ITodoData) => {
        return el.done;
      });
    }
    if (toggle.isToggleActive) {
      return copyTodoData.filter((el: ITodoData) => {
        return !el.done;
      });
    }
    if (toggle.isToggleAll) return copyTodoData;

    return copyTodoData;
  };

  const toggleDialog = () => setOpenEditDialog(!openEditDialog);

  const handleEdit = (id: number) => {
    setCurrentIdTask(id);
    toggleDialog();
  };

  return (
    <div className="todo">
      <TodoHeader
        activeTodos={todoData.filter((el) => !el.done).length}
        doneTodos={todoData.filter((el) => el.done).length}
        checkToggle={toggle.isToggleAll}
      />
      <form id="add-task" onSubmit={addTask} className="container-panel">
        <Input
          isAutoFocus={true}
          placeholder="Type here to add your task..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name="addTask"
        />
        <Button
          placeholder="Add Task"
          onClick={addTask}
          isPrimary
          className="add-btn"
          disabled={!(value && value.trim() !== "")}
        />
      </form>
      <FilterPanel
        isToggle={toggle}
        filterAll={filterAll}
        filterActive={filterActive}
        filterDone={filterDone}
        setSearchValue={(e: any) => setSearchValue(e.target.value)}
        searchValue={searchValue}
      />
      <TodoList
        todoData={selectedTodos()}
        deleteItem={deleteItem}
        makeImporant={makeImportant}
        toggleDone={toggleDone}
        handleEdit={handleEdit}
      />
      <DialogWindow
        currentIdTask={currentIdTask}
        openEditDialog={openEditDialog}
        toggleDialog={toggleDialog}
      />
    </div>
  );
};

// TypeScript

// string;
// number;
// boolean;
// null;
// undefined;
// {};
// [];
// symbol;

// string[]
// number[];
// Interface[]

// useState<string>('') =======> generic type
// type Names = 'Roman' | 'Vitalii'
// const oleg: Names = 'Oleg'
// type StringArray = Array<string>;
// const arr:string[] = ["ddfd", "fdfdf"];
