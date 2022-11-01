import type { ReactElement } from "react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { TaskColumnColors } from "../../constants/ui";

type props = {
  title: string;
  color?: string;
  tasksCount: number;
};

const colors = {
  RED_className: "bg-red-500",
  BLUE_className: "bg-blue-500",
  GREEN_className: "bg-green-500",
  PURPLE_className: "bg-purple-500",
  YELLOW_className: "bg-yellow-500",
};

export default function ColumnHeader({
  title,
  color,
  tasksCount,
}: props): ReactElement {
  const colorArray = Object.entries(colors);
  const randomColor =
    colorArray[Math.floor(Math.random() * colorArray.length)][1];

  return (
    <div className='mb-4 flex cursor-default items-center gap-2'>
      <div className={`h-5 w-5 rounded-full ${randomColor}`}></div>
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
