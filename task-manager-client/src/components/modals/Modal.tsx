import type { ReactElement, Dispatch } from "react";
import type { IChildrenProp } from "../../types/prop-types";

interface props extends IChildrenProp {
  title: string;
  description?: string;
  open: boolean;
  className?: string;
  setOpen: Dispatch<boolean>;
}

import { Dialog } from "@headlessui/react";

export default function Modal({
  children,
  title,
  description,
  open,
  className,
  setOpen,
}: props): ReactElement {
  const DEFAULT_CLASSNAME = "p-10";

  return (
    <Dialog
      className='modal modal-open'
      open={open}
      onClose={() => setOpen(false)}
    >
      <Dialog.Panel className={`modal-box ${DEFAULT_CLASSNAME} ${className}`}>
        <Dialog.Title>
          <h1 className='text-lg font-bold text-gray-700'>{title}</h1>
        </Dialog.Title>
        <div>
          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}
          {children}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
