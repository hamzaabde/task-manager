import type { ReactElement } from "react";

type props = {
  title: string;
  color?: string;
  tasksCount: number;
};

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export default function ColumnHeader({
  title,
  color,
  tasksCount,
}: props): ReactElement {
  return (
    <div className='mb-4 flex cursor-default items-center gap-2'>
      <div
        className={`h-5 w-5 rounded-full ${color ? color : "bg-purple-500"}`}
      ></div>
      <p className='justify-self-start font-semibold capitalize text-base-content/80'>
        {title} ({tasksCount})
      </p>
      <div className='flex grow justify-end'>
        <button className='btn-ghost btn-square btn-sm btn hover:bg-neutral/10'>
          <EllipsisVerticalIcon className='w-5' />
        </button>
      </div>
    </div>
  );
}
