import type { ReactElement } from "react";

export default function AddColumnBtn(): ReactElement {
  return (
    <div className='min-w-max self-center'>
      <button className='btn-ghost btn-lg btn self-center'>+ New Column</button>
    </div>
  );
}
