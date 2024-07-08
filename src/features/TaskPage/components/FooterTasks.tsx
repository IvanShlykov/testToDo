/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useContext } from 'react';
import { appContext } from '../../../context';

type Props = {
  filter: string;
  setFilter: (filter: string) => void;
  itemsLeft: number;
};

function FooterTasks({ setFilter, itemsLeft, filter }: Props): JSX.Element {
  const { dispatch } = useContext(appContext);
  return (
    <div className="footerTask">
      <div className="itemsLeft">{itemsLeft} осталось</div>
      <div className="checkBoxFooter">
        <div className={filter === 'all' ? 'footerText active' : 'footerText'} onClick={() => setFilter('all')}>Все</div>
        <div className={filter === 'active' ? 'footerText active' : 'footerText'} onClick={() => setFilter('active')}>Активные</div>
        <div className={filter === 'completed' ? 'footerText active' : 'footerText'} onClick={() => setFilter('completed')}>Выполненные</div>
      </div>
      <div className="clear" onClick={() => dispatch({ type: 'clearComplited/task' })}>
        Очистить выполненные
      </div>
    </div>
  );
}

export default memo(FooterTasks);
