import React from 'react';
import Form from './components/Form';
import TasksList from './components/TaskList';
import './tasks.css';

function TaskPage(): JSX.Element {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="todos">todos</div>
        <Form />
        <TasksList />
      </div>
    </div>
  );
}

export default TaskPage;
