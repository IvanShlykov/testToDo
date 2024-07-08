/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import Task from './Task';
import { appContext } from '../../../context';
import FooterTasks from './FooterTasks';

function TasksList(): JSX.Element {
  const [filter, setFilter] = useState('all');
  const { state } = useContext(appContext);
  const itemsLeft = state.tasks.filter((task) => !task.isDone).length;

  return (
    <div>
      {state.tasks
        .filter((task) =>
          filter === 'all' ? true : filter === 'active' ? task.isDone === false : task.isDone === true,
        )
        .map((el, i) => (
          <Task task={el} key={el.id} index={i} />
        ))}
      {state.tasks.length > 0 && <FooterTasks itemsLeft={itemsLeft} setFilter={setFilter} filter={filter} />}
    </div>
  );
}

export default TasksList;
