import type { ReactElement } from "react";

import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

import Modal from "./Modal";
import TextInput from "../forms/TextInput";
import TextBox from "../forms/TextBox";
import ListBox, { option } from "../forms/ListBox";

const options: option[] = [
  { id: 1, name: "Todo", value: 1 },
  { id: 2, name: "Doing", value: 2 },
  { id: 3, name: "Done", value: 3 },
  { id: 4, name: "Backlog", value: 4 },
];

export default function TaskForm(): ReactElement {
  const { modalType, toggle } = useContext(ModalContext);

  const isOpen = modalType == ModalTypes.TaskForm;

  const close = () => toggle({ data: null, modalType: null });

  return (
    <Modal
      title='New Task'
      open={isOpen}
      setOpen={close}
      className='pb-24'
    >
      <form>
        <TextInput
          label='name'
          placeholder='e.g Take a coffee break'
        />
        <TextBox
          label='description'
          placeholder='e.g It is always good to take a break. This 16 minute break will recharge the batteries a little.'
        />
        <ListBox
          label='Status'
          options={options}
        />
      </form>
    </Modal>
  );
}
