import { faker } from "@faker-js/faker";

export interface SubTaskData {
  id: number;
  name: string;
  done: boolean;
}

export interface TaskData {
  id: number;
  name: string;
  description: string;
  subTasks: SubTaskData[];
}

export interface ColumnData {
  id: number;
  name: string;
  description?: string;
  tasks: TaskData[];
}
