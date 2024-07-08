import { createContext, type Dispatch } from 'react';
import type { Action } from './reducer/action';
import type { State } from './reducer/type';
import { init } from './reducer/reducer';

export type Context = {
  dispatch: Dispatch<Action>;
  state: State;
};

const initialContext: Context = {
  dispatch: () => {},
  state: init,
};

export const appContext = createContext(initialContext);
