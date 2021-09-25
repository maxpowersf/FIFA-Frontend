import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TournamentsRoutingModule } from './tournaments-routing.module';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsFormComponent } from './tournaments-form/tournaments-form.component';
import { TournamentsPositionComponent } from './tournaments-position/tournaments-position.component';
import { TournamentsDetailComponent } from './tournaments-detail/tournaments-detail.component';
import { GoalscorersTabComponent } from './partial/goalscorers-tab/goalscorers-tab.component';
import { ResultsTabComponent } from './partial/results-tab/results-tab.component';
import { FinalTableTabComponent } from './partial/final-table-tab/final-table-tab.component';
import { StandingsGroupsTabComponent } from './partial/standings-groups-tab/standings-groups-tab.component';
import { StandingsRoundTabComponent } from './partial/standings-round-tab/standings-round-tab.component';

@NgModule({
  declarations: [
    TournamentsListComponent,
    TournamentsFormComponent,
    TournamentsPositionComponent,
    TournamentsDetailComponent,
    GoalscorersTabComponent,
    ResultsTabComponent,
    FinalTableTabComponent,
    StandingsGroupsTabComponent,
    StandingsRoundTabComponent
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
