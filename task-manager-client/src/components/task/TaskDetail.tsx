import type { ReactElement } from "react";
import type { ITask } from "../../types/data-types";

type props = {
  task: ITask;
};

export default function TaskDetail({ task }: props): ReactElement {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}
