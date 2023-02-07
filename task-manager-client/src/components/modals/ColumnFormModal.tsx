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

export default function ColumnForm(): ReactElement {
  const { modalType, toggle } = useContext(ModalContext);

  const isOpen = modalType == ModalTypes.ColumnForm;

  const close = () => toggle({ data: null, modalType: null });

  return (
    <Modal
      title='New Column'
      open={isOpen}
      setOpen={close}
      className='pb-24'
    >
      <form>
        <TextInput
          label='name'
          placeholder='e.g Todo'
        />
        <TextBox
          label='description'
          placeholder='e.g Puts all todo tasks in one list'
        />
      </form>
    </Modal>
  );
}
