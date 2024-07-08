import type { Action } from './action';
import type { State } from './type';

export const init: State = { tasks: [] };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add/task':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'del/task':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case 'change/task':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };

    case 'done/task':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task,
        ),
      };
    case 'clearComplited/task':
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.isDone),
      };

    default:
      return state;
  }
};
