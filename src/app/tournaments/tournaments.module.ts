import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsFormComponent } from './tournaments-form/tournaments-form.component';
import { TournamentsPositionComponent } from './tournaments-position/tournaments-position.component';
import { TournamentsDetailComponent } from './tournaments-detail/tournaments-detail.component';

@NgModule({
  declarations: [
    TournamentsListComponent,
    TournamentsFormComponent,
    TournamentsPositionComponent,
    TournamentsDetailComponent
  ],
  imports: [
    CommonModule,
    TournamentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TournamentsModule { }
