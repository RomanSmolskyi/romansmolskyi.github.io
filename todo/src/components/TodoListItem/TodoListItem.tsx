import React, { useState } from "react";
import { Button } from "../shared";
import clsx from "clsx";
import "./TodoListItem.css";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import PriorityHighRoundedIcon from "@material-ui/icons/PriorityHighRounded";
import EditIcon from "@material-ui/icons/Edit";
import { CustumDialog } from "../shared/Dialog";

interface ITodoListItem {
  label: string;
  makeImporant: () => void;
  deleteItem: () => void;
  imoprtant: boolean;
  done: boolean;
  toggleDone: () => void;
  handleEdit: () => void;
  dateOfCreation: string;
  dateDone: null | string;
  dateOfUpdate: null | string;
}

export const TodoListItem = ({
  label,
  deleteItem,
  makeImporant,
  imoprtant,
  done,
  dateOfCreation,
  dateDone,
  toggleDone,
  handleEdit,
  dateOfUpdate,
}: ITodoListItem): JSX.Element => {
  const classList = () => {
    if (done) {
      if (imoprtant) return clsx("done", "important", "label");
      return clsx("done", "label");
    }
    if (imoprtant) {
      return clsx("important", "label");
    }
    return "label";
  };

  const [open, setOpen] = useState(false);

  const DialogTodoContent = () => (
    <div className="dialog-todo-content">
      <div>Data creation: {dateOfCreation}</div>
      {dateOfUpdate && <div>Date updated: {dateOfUpdate} </div>}
      <div>Done: {done ? ` ${dateDone}` : "No"}</div>
      <div>Important: {imoprtant ? "Yes" : "No"}</div>
    </div>
  );

  return (
    <>
      <CustumDialog
        open={open}
        onClose={() => setOpen(false)}
        title={label}
        content={<DialogTodoContent />}
      />
      <li className="todo-item">
        <input
          type="checkbox"
          className="check-box"
          onClick={toggleDone}
          id={`toggleDone-${label}`}
          defaultChecked={done}
        />
        <label htmlFor={`toggleDone-${label}`}></label>
        <span
          className={classList()}
          title={label}
          onClick={() => setOpen(true)}
        >
          {label}
        </span>

        <span className="control-buttons">
          <Button
            className="delete-btn"
            placeholder={
              <DeleteForeverOutlinedIcon
                className="delete-icon"
                fontSize="medium"
              />
            }
            onClick={deleteItem}
          />
          <Button
            className="important-btn"
            placeholder={
              <PriorityHighRoundedIcon
                fontSize="medium"
                className="important-icon"
              />
            }
            onClick={makeImporant}
          />
          <Button
            className="edit-btn"
            placeholder={<EditIcon fontSize="small" className="edit-icon" />}
            onClick={handleEdit}
          />
        </span>
      </li>
    </>
  );
};
