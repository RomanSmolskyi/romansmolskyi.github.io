import { ReactNode } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.getElementById("portal") as HTMLElement;

interface IModalInfo {
  children: JSX.ElementChildrenAttribute;
}

export const ModalInfo = ({ children }: IModalInfo): JSX.Element => {
  return createPortal(children, modalRootElement);
};
