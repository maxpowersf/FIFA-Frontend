import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsFormComponent } from './tournaments-form/tournaments-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TournamentsListComponent, TournamentsFormComponent],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TournamentsModule { }
