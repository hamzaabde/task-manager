import type { ReactElement } from "react";

import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

import Modal from "./Modal";
import TextInput from "../forms/TextInput";

export default function TaskForm(): ReactElement {
  const { modalType, toggle } = useContext(ModalContext);

  const isOpen = modalType == ModalTypes.TaskForm;

  const close = () => toggle({ data: null, modalType: null });

  return (
    <Modal
      title='New Task'
      open={isOpen}
      setOpen={close}
    >
      <form>
        <TextInput
          label='name'
          placeholder='enter name'
        />
      </form>
    </Modal>
  );
}
