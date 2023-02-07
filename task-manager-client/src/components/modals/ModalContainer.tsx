import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

import TaskForm from "./TaskFormModal";
import TaskDetail from "../task/TaskDetail";
import ColumnForm from "./ColumnFormModal";

export default function ModalContainer() {
  return (
    <>
      {/* <TaskDetail /> */}
      <TaskForm />
      <ColumnForm />
    </>
  );
}
