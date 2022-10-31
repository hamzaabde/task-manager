import type { ReactElement, Dispatch } from "react";
import type { IChildrenProp } from "../types/prop-types";
import type { IModalContext, IModalState } from "../types/modal-types";

import { ModalTypes } from "../constants/ui";
import { createContext, useState } from "react";

export const ModalContext = createContext<IModalContext>({} as IModalContext);

export function ModalStateProvider({ children }: IChildrenProp): ReactElement {
  const [data, setModalData] = useState<IModalState>({
    data: null,
    modalType: null,
  });

  return (
    <ModalContext.Provider value={{ ...data, toggle: setModalData }}>
      {children}
    </ModalContext.Provider>
  );
}
