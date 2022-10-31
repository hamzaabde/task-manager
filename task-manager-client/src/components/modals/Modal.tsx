import type { ReactElement, Dispatch } from "react";
import type { IChildrenProp } from "../../types/prop-types";

interface props extends IChildrenProp {
  title: string;
  description?: string;
  open: boolean;
  setOpen: Dispatch<boolean>;
}

import { Dialog } from "@headlessui/react";

export default function Modal({
  children,
  title,
  description,
  open,
  setOpen,
}: props): ReactElement {
  return (
    <Dialog
      className='modal modal-open'
      open={open}
      onClose={() => setOpen(false)}
    >
      <Dialog.Panel className='modal-box'>
        <Dialog.Title>{title}</Dialog.Title>
        {description && <Dialog.Description>{description}</Dialog.Description>}
        {children}
      </Dialog.Panel>
    </Dialog>
  );
}
