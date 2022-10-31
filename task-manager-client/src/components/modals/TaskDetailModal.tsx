import type { ReactElement } from "react";
import { ITask } from "../../types/data-types";

import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

import Modal from "./Modal";
import TaskDetail from "../task/TaskDetail";

export default function TaskForm(): ReactElement {
  const { data, modalType, toggle } = useContext(ModalContext);

  const isOpen = modalType == ModalTypes.TaskDetail;

  const close = () => toggle({ data: null, modalType: null });

  return (
    <Modal
      title='New Task'
      open={isOpen}
      setOpen={close}
    >
      <TaskDetail task={data as ITask} />
    </Modal>
  );
}
