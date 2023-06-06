import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, Button } from "../shared";
import { TodoHeader } from "../TodoHeader";
import { TodoList } from "../TodoList";
import { FilterPanel } from "../FilterPanel";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useLogger, useSetLocalStorage } from "../../utils/customHooks";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTask,
  doImportant,
  doneTask,
  editTask,
  removeTask,
} from "../../store/todo/todoSlice";
import { IAppState } from "../../store/rootReducer";

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
  const [value, setValue] = useState<string>("");
  // const [todoData, setTodoData] = useState<ITodoData[]>(
  //   JSON.parse(localStorage.getItem("todos") || "[]")
  // );
  const [toggle, setToggle] = useState<IToggle>({
    isToggleAll: true,
    isToggleDone: false,
    isToggleActive: false,
  });
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [currentIdTaks, setCurrentIdTask] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const selectTodoData = (state: IAppState) => state.todos.todoData;

  const toLocalDateStr = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  const dispatch = useDispatch();

  const todoData = useSelector(selectTodoData);

  useSetLocalStorage(todoData, "todos");
  console.log(JSON.parse(localStorage.getItem("todos") || "[]"));

  // useSetLocalStorage(value, "inputValue");

  const addTask = () => {
    if (value && value.trim() !== "") {
      dispatch(
        addNewTask({
          label: value,
          id: new Date().getTime(),
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      if (!!value) addTask();
    }
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
    let data = [...todoData];

    if (searchValue?.length) {
      data = data.filter((el) =>
        el.label?.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (toggle.isToggleDone) {
      return data.filter((el: ITodoData) => {
        return el.done;
      });
    }
    if (toggle.isToggleActive) {
      return data.filter((el: ITodoData) => {
        return !el.done;
      });
    }
    if (toggle.isToggleAll) return data;
    return data;
  };

  const toggleDialog = () => setOpenEditDialog(!openEditDialog);

  const handleConfirmEditDialog = (id: number) => {
    if (editValue && editValue.trim() !== "") {
      dispatch(editTask({ id, editValue, toLocalDateStr }));
      setEditValue("");
    }
    toggleDialog();
  };

  const handleEdit = (id: number) => {
    setCurrentIdTask(id);
    toggleDialog();
  };

  const handleEditOnEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleConfirmEditDialog(currentIdTaks);
    }
  };

  return (
    <div className="todo">
      <TodoHeader
        activeTodos={todoData.filter((el) => !el.done).length}
        doneTodos={todoData.filter((el) => el.done).length}
        checkToggle={toggle.isToggleAll}
      />
      <div className="container-panel">
        <Input
          // ref={focusInput}
          isAutoFocus={true}
          placeholder="Type here to add your task..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          placeholder="Add Task"
          onClick={addTask}
          isPrimary
          className="add-btn"
          disabled={!(value && value.trim() !== "")}
        />
      </div>
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

      <Dialog
        open={openEditDialog}
        onClose={toggleDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change the task name</DialogTitle>
        <DialogContent>
          <Input
            placeholder="Enter new name"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyPress={(e) => handleEditOnEnter(e)}
            isAutoFocus={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} placeholder="Cancel" />
          <Button
            onClick={() => handleConfirmEditDialog(currentIdTaks)}
            placeholder="Save changes"
          />
        </DialogActions>
      </Dialog>
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
