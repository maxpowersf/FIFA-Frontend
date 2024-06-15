import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerNavigationAction,
} from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';

import { AppActions } from './app.actions';
import { FIFAState, initialState } from './app.state';

export const fifaReducer = createReducer<FIFAState>(
  initialState,
  on(AppActions.fetchMenuItems, (state, { payload: menuSections }) => {
    const { menu } = state;
    return {
      ...state,
      menu: {
        ...menu,
        menuSections,
      },
    };
  }),
  on(routerNavigationAction, (state) => {
    const { menu } = state;
    return {
      ...state,
      menu: {
        ...menu,
        isMenuLoading: true,
      },
    };
  }),
  on(routerNavigatedAction, routerCancelAction, routerErrorAction, (state) => {
    const { menu } = state;
    return {
      ...state,
      menu: {
        ...menu,
        isMenuLoading: false,
      },
    };
  }),
  on(AppActions.setDisplayedColumns, (state, { payload: displayedColumns }) => {
    return {
      ...state,
      displayedColumns,
    };
  }),
);
