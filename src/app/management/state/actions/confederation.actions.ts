import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Confederation, ConfederationPayload } from '../../models';

export enum ConfederationsActionTypes {
  SelectedItemSet = '[Router] set selected item',
  Fetch = '[Confederations] fetch',
  FetchSuccess = '[Confederations] fetch success',
  FetchError = '[Confederations] fetch error',
  FetchOne = '[Confederations] fetch one',
  Submit = '[Confederations] submit',
  SubmitSuccess = '[Confederations] submit success',
  Delete = '[Confederations] delete',
}

const setSelectedItem = createAction(
  ConfederationsActionTypes.SelectedItemSet,
  props<{ payload: number }>(),
);

const fetchConfederations = createAction(
  ConfederationsActionTypes.Fetch,
  props<{ payload: ConfederationPayload }>(),
);

const fetchConfederationsSuccess = createAction(
  ConfederationsActionTypes.FetchSuccess,
  props<{ payload: Confederation[] }>(),
);

const fetchConfederationsError = createAction(
  ConfederationsActionTypes.FetchError,
  props<{ payload?: HttpErrorResponse }>(),
);

const fetchConfederation = createAction(
  ConfederationsActionTypes.FetchOne,
  props<{ payload?: number }>(),
);

const submitConfederation = createAction(
  ConfederationsActionTypes.Submit,
  props<{ payload: Confederation }>(),
);

const submitConfederationSuccess = createAction(
  ConfederationsActionTypes.SubmitSuccess,
  props<{ payload: any }>(),
);

const deleteConfederation = createAction(
  ConfederationsActionTypes.Delete,
  props<{ payload: number }>(),
);

export const ConfederationsActions = {
  setSelectedItem,
  fetchConfederations,
  fetchConfederationsSuccess,
  fetchConfederationsError,
  fetchConfederation,
  submitConfederation,
  submitConfederationSuccess,
  deleteConfederation,
};
