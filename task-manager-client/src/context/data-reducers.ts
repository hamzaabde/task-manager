import type { Task, TaskColumn, SubTask } from "../types/data-types";

export enum Actions {
  AddTask = "ADD_TASK",
  RemoveTask = "REMOVE_TASK",
  EditTask = "EDIT_TASK",
  AddColumn = "ADD_COLUMN",
  RemoveColumn = "REMOVE_COLUMN",
  EditColumn = "EDIT_COLUMN",
}

export type action = {
  type: Actions;
  payload?: Task | TaskColumn;
  index?: number;
};

export function dataReducer(state: TaskColumn[], action: action): TaskColumn[] {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state.map((column, index) => {
          if (action.index && index == action.index)
            column.tasks?.push(action.payload as Task);

          return column;
        }),
      ];
    case "REMOVE_TASK":
      return state;
    default:
      return state;
  }
}
