import { createAction, props } from '@ngrx/store';

export enum AppActionTypes {
  FetchMenuItems = '[Menu] fetch items',
  DisplayedColumnsSet = '[DisplayedColumns] set',
}

const fetchMenuItems = createAction(
  AppActionTypes.FetchMenuItems,
  props<{ payload?: any }>(),
);

const setDisplayedColumns = createAction(
  AppActionTypes.DisplayedColumnsSet,
  props<{ payload?: any }>(),
);

export const AppActions = {
  fetchMenuItems,
  setDisplayedColumns,
};
