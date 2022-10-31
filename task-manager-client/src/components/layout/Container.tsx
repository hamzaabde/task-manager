import type { ReactElement } from "react";
import type { IChildrenProp } from "../../types/prop-types";

export default function Container({ children }: IChildrenProp): ReactElement {
  return (
    <div className='flex max-h-screen min-h-screen flex-col overflow-hidden bg-base-200'>
      {children}
    </div>
  );
}
