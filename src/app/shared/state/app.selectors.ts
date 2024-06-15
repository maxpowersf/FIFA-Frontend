import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FIFAState, FIFA_FEATURE } from './app.state';

export const getFIFA = createFeatureSelector<FIFAState>(FIFA_FEATURE);

export const getDisplayedColumns = createSelector(
  getFIFA,
  ({ displayedColumns }) => displayedColumns,
);

export const getIsEditing = createSelector(
  getFIFA,
  ({ isEditing }) => isEditing,
);

export const getMenu = createSelector(getFIFA, ({ menu }) => menu);

export const getIsMenuLoading = createSelector(
  getMenu,
  ({ isMenuLoading }) => isMenuLoading,
);

export const getMenuSections = createSelector(
  getMenu,
  ({ menuSections }) => menuSections,
);
