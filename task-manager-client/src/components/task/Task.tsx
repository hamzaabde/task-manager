import type { ReactElement } from "react";
import type { ITask } from "../../types/data-types";

export default function Task({
  title,
  description,
  subTasks,
}: ITask): ReactElement {
  const done = subTasks?.filter(({ done }) => done);

  return (
    <div className='ring-1ring-gray-300 cursor-pointer rounded-md bg-base-100 p-4 shadow-gray-200 ring-1 ring-neutral/10 transition-all hover:bg-base-100/70 hover:shadow-md'>
      <strong className='mb-2 block font-semibold leading-tight text-gray-700'>
        {title}
      </strong>
      <p className='text-sm font-semibold text-gray-400'>
        {done?.length} of {subTasks?.length} subtasks
      </p>
    </div>
  );
}
