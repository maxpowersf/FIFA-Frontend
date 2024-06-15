import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppActions, FIFAState, selectRouteParam } from '@shared/state';
import { mapDatasourceToColumns } from '@shared/utils';
import { ConfederationsService } from '../../services';
import { ConfederationsActions } from '../actions';

@Injectable()
export class ConfederationsEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<FIFAState>,
    private confederationsService: ConfederationsService,
  ) {}

  public fetchConfederations$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfederationsActions.fetchConfederations),
      switchMap(() => this.confederationsService.getAll()),
      map((payload) =>
        payload === null
          ? ConfederationsActions.fetchConfederationsError({})
          : ConfederationsActions.fetchConfederationsSuccess({
              payload,
            }),
      ),
    ),
  );

  public fetchConfederation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ConfederationsActions.fetchConfederation),
        withLatestFrom(this.store$.select(selectRouteParam('id'))),
        switchMap(([, id]) => this.confederationsService.getOne(+id)),
      ),
    { dispatch: false },
  );

  public submitConfederation$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfederationsActions.submitConfederation),
      mergeMap(({ payload }) => this.confederationsService.add(payload)),
      map(ConfederationsActions.submitConfederationSuccess),
    ),
  );

  public deleteConfederation$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfederationsActions.deleteConfederation),
      switchMap(({ payload }) => this.confederationsService.delete(payload)),
      map(ConfederationsActions.fetchConfederations),
    ),
  );

  public setDisplayedColumns$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfederationsActions.fetchConfederationsSuccess),
      map(({ payload }) =>
        AppActions.setDisplayedColumns({
          payload: [...mapDatasourceToColumns(payload), 'actions'],
        }),
      ),
    ),
  );
}
