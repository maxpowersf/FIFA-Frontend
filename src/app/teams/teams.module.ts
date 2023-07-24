import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TeamsDashboardComponent } from './teams-dashboard/teams-dashboard.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsSquadComponent } from './teams-squad/teams-squad.component';

@NgModule({
  declarations: [
    TeamsFormComponent,
    TeamsListComponent,
    TeamsSquadComponent,
    TeamsDashboardComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeamsModule {}
