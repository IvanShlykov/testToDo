/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useReducer } from 'react';

import { init, reducer } from '../reducer/reducer';
import { appContext } from '../context';
import TaskPage from '../features/TaskPage/TaskPage';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <appContext.Provider value={{ dispatch, state }}>
      <TaskPage />
    </appContext.Provider>
  );
}

export default App;
