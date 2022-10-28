import type { ReactElement } from "react";
import type { ChildrenProp } from "../../types/prop-types";

import {
  Bars3BottomLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

export default function Header(): ReactElement {
  return (
    <div className='p-4'>
      <header className='navbar rounded-md bg-base-100 px-4 shadow-sm shadow-neutral/20 ring-1 ring-base-200'>
        <div className='navbar-start'>
          <button className='btn-ghost btn-square btn-sm btn'>
            <Bars3BottomLeftIcon className='w-5' />
          </button>
        </div>

        <div className='navbar-center'>
          <h1 className='text-lg font-bold text-base-content'>
            Project Planner
          </h1>
        </div>

        <div className='navbar-end'>
          <button className='btn-ghost btn-square btn-sm btn'>
            <EllipsisVerticalIcon className='w-5' />
          </button>
        </div>
      </header>
    </div>
  );
}
