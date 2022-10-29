import type { ReactElement } from "react";
import type { ChildrenProp } from "../../types/prop-types";

export default function Container({ children }: ChildrenProp): ReactElement {
  return (
    <div className='flex max-h-screen min-h-screen flex-col overflow-hidden bg-base-200'>
      {children}
    </div>
  );
}
