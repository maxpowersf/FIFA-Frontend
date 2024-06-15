import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { ConfederationsActions, ManagementState } from '@management/state';

@Component({
  selector: 'app-confederations-form',
  templateUrl: './confederations-form.component.html',
  styleUrls: ['./confederations-form.component.css'],
})
export class ConfederationsFormComponent implements OnInit, OnDestroy {
  public confederation$: Subscription;
  public isEditing: boolean = false;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private store$: Store<ManagementState>,
  ) {}

  ngOnInit(): void {
    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    this.form = this.modelCreate();
    this.store$.dispatch(ConfederationsActions.fetchConfederation({}));
    // this.confederation$ = this.store$
    //   .pipe(
    //     withLatestFrom(this.confederationId$),
    //     filter((confederationId) => {
    //       debugger;
    //       return this.isEditing && !!confederationId;
    //     }),
    //     select(getConfederation),
    //     tap((confederation) => {
    //       this.form.patchValue(confederation);
    //     }),
    //   )
    //   .subscribe();
  }

  ngOnDestroy(): void {
    if (this.confederation$) {
      this.confederation$.unsubscribe();
    }
  }

  modelCreate = () =>
    this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      color: ['#FFFFFF', Validators.required],
      weight: ['0.0', Validators.required],
    });

  goToList = () => this.location.back();

  submit = () => {
    if (!this.form.valid) {
      return;
    }

    this.store$.dispatch(
      ConfederationsActions.submitConfederation({ payload: this.form.value }),
    );
  };
}
