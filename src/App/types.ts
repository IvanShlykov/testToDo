export type Task = {
  id: number;
  task: string;
  isDone: boolean;
};

export type TaskId = Task['id'];
export type AddTask = Task['task'];
