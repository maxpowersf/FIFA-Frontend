import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { TeamsResolver } from './resolvers/teams.resolver';
import { TeamResolver } from './resolvers/team.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TeamsSquadComponent } from './teams-squad/teams-squad.component';
import { TeamSquadResolver } from './resolvers/teamsquad.resolver';
import { TeamsDashboardComponent } from './teams-dashboard/teams-dashboard.component';
import { TournamentsByTeamResolver } from '../tournaments/resolvers/tournamentsbyteam.resolver';

const routes: Routes = [
  {
    path: '',
    component: TeamsListComponent,
    resolve: {
      teams: TeamsResolver
    }
  },
  {
    path: 'new',
    component: TeamsFormComponent,
    resolve: {
      confederations: ConfederationsResolver
    }
  },
  {
    path: ':id/edit',
    component: TeamsFormComponent,
    resolve: {
      confederations: ConfederationsResolver,
      team: TeamResolver
    }
  },
  {
    path: ':id/squad',
    component: TeamsSquadComponent,
    resolve: {
      players: TeamSquadResolver
    }
  },
  {
    path: ':id/dashboard',
    component: TeamsDashboardComponent,
    resolve: {
      team: TeamResolver,
      tournaments: TournamentsByTeamResolver,
      players: TeamSquadResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
