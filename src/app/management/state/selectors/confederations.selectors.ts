import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MANAGEMENT_FEATURE, ManagementState } from '../managements.state';

export const { selectRouteParams } = getRouterSelectors();

export const getManagement =
  createFeatureSelector<ManagementState>(MANAGEMENT_FEATURE);

export const getSelectedItem = createSelector(
  getManagement,
  ({ selectedItem }) => selectedItem,
);

export const getIsLoading = createSelector(
  getManagement,
  ({ isLoading }) => isLoading,
);

export const getConfederations = createSelector(
  getManagement,
  ({ confederations }) => confederations,
);

export const getConfederation = createSelector(
  getConfederations,
  getSelectedItem,
  (confederations, selectedItem) =>
    confederations.find((c) => c.id === selectedItem),
);
