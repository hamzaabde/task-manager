import type { ReactElement } from "react";
import type { ITask } from "../../types/data-types";

export default function Task({
  title,
  description,
  subTasks,
}: ITask): ReactElement {
  const done = subTasks?.filter(({ done }) => done);

  return (
    <div className='ring-1ring-gray-300 cursor-pointer rounded-md bg-white p-4 shadow-gray-200 transition-all hover:bg-gray-50 hover:shadow-sm'>
      <strong className='mb-2 block font-semibold leading-tight text-gray-700'>
        {title}
      </strong>
      <p className='text-sm font-semibold text-gray-400'>
        {done?.length} of {subTasks?.length} subtasks
      </p>
    </div>
  );
}
