import type { ReactElement } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddTaskBtn(): ReactElement {
  return (
    <button className='btn-primary btn-sm btn'>
      <PlusIcon className='mr-2 w-4' />
      new task
    </button>
  );
}
