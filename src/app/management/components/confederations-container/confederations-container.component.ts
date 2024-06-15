import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { getDisplayedColumns } from '@shared/state';
import {
  ConfederationsActions,
  ManagementState,
  getConfederations,
  getIsLoading,
} from '../../state';

@Component({
  selector: 'app-confederations-container',
  templateUrl: './confederations-container.component.html',
  styleUrls: ['./confederations-container.component.css'],
})
export class ConfederationsContainerComponent implements OnInit {
  public confederations$ = this.store$.pipe(select(getConfederations));
  public displayedColumns$ = this.store$.pipe(select(getDisplayedColumns));
  public isLoading$ = this.store$.pipe(select(getIsLoading));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<ManagementState>,
  ) {}

  public ngOnInit(): void {
    this.store$.dispatch(
      ConfederationsActions.fetchConfederations({ payload: {} }),
    );
  }

  public onAddClick = () =>
    this.router.navigate(['new'], { relativeTo: this.route });

  public onEditClick = (id: number) => {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  };

  public onDetailClick = (id: string) => {
    console.log('Detail', id);
  };

  public onDeleteClick = (id: number) => {
    this.store$.dispatch(
      ConfederationsActions.deleteConfederation({ payload: id }),
    );
  };

  // displayedColumns2: any[] = [
  //   {
  //     key: 'id',
  //     title: 'No.',
  //     customClass: 'clickable',
  //     customAction: this.onDetailClick,
  //     tooltipText: 'Ranking',
  //   },
  //   {
  //     key: 'name',
  //     title: 'Name',
  //   },
  //   {
  //     key: 'color',
  //     title: 'Color',
  //     type: 'button',
  //   },
  //   {
  //     key: 'weight',
  //     title: 'Weight',
  //     type: 'number',
  //   },
  // ];
  // displayedColumns: string[] = [
  //   ...this.displayedColumns2.map((a) => a.key),
  //   'actions',
  // ];
}
