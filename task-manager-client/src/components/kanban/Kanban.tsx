import type { ReactElement } from "react";

import type { ITaskColumn, ITask } from "../../types/data-types";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getColumns, getTasks } from "../../utils/api";

import Column from "../column/Column";
import AddColumnBtn from "../column/AddColumn";

export default function Kanban(): ReactElement {
  const { data: columns } = useQuery<ITaskColumn[]>(["columns"], getColumns);
  const { data: tasks } = useQuery(["tasks"], getTasks);

  return (
    <main className='flex grow overflow-auto p-4 pb-2 scrollbar-hide'>
      <div className='flex flex-nowrap gap-8 self-stretch'>
        {columns &&
          columns.map((col: ITaskColumn, i: number) => (
            <Column
              key={i}
              tasks={tasks}
              {...col}
            />
          ))}
        <AddColumnBtn />
      </div>
    </main>
  );
}
