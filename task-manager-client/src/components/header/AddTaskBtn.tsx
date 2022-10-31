import type { ReactElement } from "react";

import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddTaskBtn(): ReactElement {
  const { toggle } = useContext(ModalContext);

  const openModal = () =>
    toggle({ data: null, modalType: ModalTypes.TaskForm });

  return (
    <button
      className='btn-primary btn-sm btn'
      onClick={() => openModal()}
    >
      <PlusIcon className='mr-2 w-4' />
      new task
    </button>
  );
}
