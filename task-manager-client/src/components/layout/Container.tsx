import type { ReactElement } from "react";
import type { ChildrenProp } from "../../utils/types/prop-types";

export default function Container({ children }: ChildrenProp): ReactElement {
  return (
    <div className='max-h-screen min-h-screen bg-base-300'>{children}</div>
  );
}
