import type { ReactElement } from "react";
import { useContext } from "react";

import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

export default function AddColumnBtn(): ReactElement {
  const { toggle } = useContext(ModalContext);

  const openModal = () =>
    toggle({ data: null, modalType: ModalTypes.ColumnForm });

  return (
    <div className='min-w-max self-center'>
      <button
        onClick={() => openModal()}
        className='btn-ghost btn-lg btn self-center'
      >
        + New Column
      </button>
    </div>
  );
}
