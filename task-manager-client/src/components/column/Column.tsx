import type { ReactElement } from "react";
import { ITask } from "../../types/data-types";

import ColumnHeader from "./ColumnHeader";
import Task from "../task/Task";

type props = {
  id: number;
  name: string;
  tasks?: ITask[];
};

export default function Column({ tasks, id, name }: props): ReactElement {
  const filteredTasks = tasks && tasks.filter((tasks) => tasks.column == id);

  return (
    <section className='w-72 shrink-0'>
      <ColumnHeader
        title={name}
        tasksCount={tasks?.length || 0}
      />
      <div className='flex flex-col gap-4'>
        {filteredTasks &&
          filteredTasks.map((task, i) => (
            <Task
              key={i}
              {...task}
            />
          ))}
      </div>
    </section>
  );
}
