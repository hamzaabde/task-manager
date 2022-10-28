export interface ISubTask {
  content: string;
  done: boolean;
}

export interface ITask {
  id: number;
  column: number;
  title: string;
  description: string;
  subTasks?: ISubTask[];
}

export interface ITaskColumn {
  id: number;
  name: string;
}
