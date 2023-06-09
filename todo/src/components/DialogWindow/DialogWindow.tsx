import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Button, Input } from "../shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/todo/todoSlice";
import { toLocalDateStr } from "../../helpers";

interface IDialogWindow {
  currentIdTask: number;
  openEditDialog: boolean;
  toggleDialog: () => void;
}

export const DialogWindow = ({
  currentIdTask,
  openEditDialog,
  toggleDialog,
}: IDialogWindow): JSX.Element => {
  const dispatch = useDispatch();
  const [editValue, setEditValue] = useState("");

  const handleConfirmEditDialog = (id: number) => {
    if (editValue && editValue.trim() !== "") {
      dispatch(editTask({ id, editValue, toLocalDateStr }));
      setEditValue("");
    }
    toggleDialog();
  };

  const handleEditOnEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleConfirmEditDialog(currentIdTask);
    }
  };

  return (
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
          isAutoFocus={true}
          onKeyPress={(e) => handleEditOnEnter(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog} placeholder="Cancel" />
        <Button
          onClick={() => handleConfirmEditDialog(currentIdTask)}
          placeholder="Save changes"
        />
      </DialogActions>
    </Dialog>
  );
};
