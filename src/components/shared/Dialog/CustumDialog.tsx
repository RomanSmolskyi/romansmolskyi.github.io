import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import "./CustumDialog.css";

interface ICustumDialog {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export const CustumDialog = ({
  open,
  onClose,
  title,
  content,
}: ICustumDialog): JSX.Element => {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      PaperProps={{
        classes: {
          root: "dialog",
        },
      }}
    >
      <DialogTitle className="dialog-title" disableTypography>
        <span>Todo Details</span>
        <div className="icon-container">
          <CloseIcon onClick={onClose} className="close-icon" />
        </div>
      </DialogTitle>
      <DialogContent className="dialog-content">
        <h4 className="heading">
          Task name: <span className="todo-title">{title}</span>
        </h4>
        {content}
      </DialogContent>
    </Dialog>
  );
};
