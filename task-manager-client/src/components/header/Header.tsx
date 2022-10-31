import type { ReactElement } from "react";
import type { IChildrenProp } from "../../types/prop-types";

import {
  Bars3BottomLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import AddTaskBtn from "./AddTaskBtn";

export default function Header(): ReactElement {
  return (
    <div className='p-4'>
      <header className='navbar rounded-md bg-base-100 px-4 shadow-sm shadow-neutral/40 ring-1 ring-neutral/5 ring-base-200'>
        <div className='navbar-start'>
          <button className='btn-ghost btn-square btn-sm btn hover:bg-neutral/10'>
            <Bars3BottomLeftIcon className='w-5' />
          </button>
        </div>

        <div className='navbar-center'>
          <h1 className='text-lg font-bold text-base-content'>
            Project Planner
          </h1>
        </div>

        <div className='navbar-end gap-4'>
          <AddTaskBtn />
          <button className='btn-ghost btn-square btn-sm btn hover:bg-neutral/10'>
            <EllipsisVerticalIcon className='w-5' />
          </button>
        </div>
      </header>
    </div>
  );
}
