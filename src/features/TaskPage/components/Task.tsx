import React, { useContext, useState } from 'react';
import type { Task } from '../../../App/types';
import { appContext } from '../../../context';

type Props = {
  task: Task;
  index: number;
};

function TaskOne({ task, index }: Props): JSX.Element {
  const [newTask, setNewTask] = useState<string>(task.task);
  const [stateChange, setStateChange] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const { dispatch } = useContext(appContext);

  const changeTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newTask) {
      dispatch({
        type: 'change/task',
        payload: { task: newTask, id: task.id, isDone: task.isDone },
      });
      setStateChange(true);
      setError('');
    } else {
      setError('Заполните таску');
    }
  };

  return (
    <>
      <div className="error">{error}</div>
      <div className="task">
        {stateChange ? (
          <>
            <div className={task.isDone ? 'textTaskScratch' : 'textTask'}>
              <input
                id="checkbox"
                type="checkbox"
                onChange={() => dispatch({ type: 'done/task', payload: task.id })}
                checked={task.isDone}
              />
              <div className="index">{index + 1}. </div>
              <div> {task.task}</div>
            </div>
            <div className="buttons">
              <button type="submit" onClick={() => setStateChange(false)} className="btnChan">
                Изменить
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: 'del/task', payload: task.id })}
                className="btnDel"
              >
                Удалить
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={changeTask}>
            Изменить задачу
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
            <button type="submit" className="addButton">
              Сохранить
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default TaskOne;
