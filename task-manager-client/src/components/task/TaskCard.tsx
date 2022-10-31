import type { ReactElement } from "react";
import type { ITask } from "../../types/data-types";

type props = {
  task: ITask;
};

import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";
import { ModalTypes } from "../../constants/ui";

export default function Task({ task }: props): ReactElement {
  const { data, toggle } = useContext(ModalContext);

  const openTaskDetail = () =>
    toggle({ modalType: ModalTypes.TaskDetail, data: task });

  const done = task.subTasks?.filter(({ done }) => done);

  return (
    <button
      type='button'
      className='ring-1ring-gray-300 rounded-md bg-base-100 p-4 shadow-gray-200 ring-1 ring-neutral/10 transition-all hover:bg-base-100/70 hover:shadow-md'
      onClick={() => openTaskDetail()}
    >
      <strong className='mb-2 font-semibold leading-tight text-gray-700'>
        {task.title}
      </strong>
      <p className='text-sm font-semibold text-gray-400'>
        {done?.length} of {task.subTasks?.length} subtasks
      </p>
    </button>
  );
}
