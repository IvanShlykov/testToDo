import React, { memo, useContext, useState } from 'react';
import { appContext } from '../../../context';

function Form(): JSX.Element {
  const [task, setTask] = useState<string>('');
  const [id, setId] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const { dispatch } = useContext(appContext);

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (task) {
      dispatch({ type: 'add/task', payload: { task, id, isDone: false } });
      setId((prev) => prev + 1);
      setTask('');
      setError('');
    } else {
      setError('Заполните таску');
    }
  };
  
  return (
    <div>
      <div className="error">{error}</div>
      <form onSubmit={addTask} className="form">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Что надо сделать?'/>
      </form>
    </div>
  );
}

export default memo(Form);
