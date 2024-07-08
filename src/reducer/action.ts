import type { Task, TaskId } from '../App/types';

export type Action =
  | { type: 'add/task'; payload: Task }
  | { type: 'del/task'; payload: TaskId }
  | { type: 'change/task'; payload: Task}
  | { type: 'done/task'; payload: TaskId}
  | { type: 'clearComplited/task'}
  