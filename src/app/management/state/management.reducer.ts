import { createReducer, on } from '@ngrx/store';

import { ConfederationsActions } from './actions';
import { ManagementState, initialState } from './managements.state';

export const managementReducer = createReducer<ManagementState>(
  initialState,
  on(
    ConfederationsActions.setSelectedItem,
    (state, { payload: selectedItem }) => {
      return {
        ...state,
        selectedItem,
      };
    },
  ),
  on(
    ConfederationsActions.fetchConfederationsSuccess,
    (state, { payload: confederations }) => {
      return {
        ...state,
        isLoading: false,
        confederations: [...confederations],
      };
    },
  ),
  on(ConfederationsActions.deleteConfederation, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
);
