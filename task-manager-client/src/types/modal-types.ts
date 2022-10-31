import type { Dispatch } from "react";
import type { ITask } from "./data-types";
import { ModalTypes } from "../constants/ui";

export type data = ITask | null;
export type modalTypes = ModalTypes | null;

export interface IModalState {
  data: data;
  modalType: modalTypes;
}

export interface IModalContext extends IModalState {
  toggle: Dispatch<IModalState>;
}
