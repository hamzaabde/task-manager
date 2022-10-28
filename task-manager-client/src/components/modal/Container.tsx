import type { ReactElement } from "react";
import type { ChildrenProp } from "../../types/prop-types";

interface props extends ChildrenProp {
  title: string;
  description: string;
  open: boolean;
  setOpen: (state?: boolean) => void;
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
      open={open}
      onClose={() => setOpen(false)}
    >
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button
          type='button'
          onClick={() => setOpen(false)}
        >
          Deactivate
        </button>
        <button
          type='button'
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
