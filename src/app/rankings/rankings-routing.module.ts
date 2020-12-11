import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingsListComponent } from './rankings-list/rankings-list.component';
import { TeamsResolver } from '../teams/resolvers/teams.resolver';
import { RankingsMatchComponent } from './rankings-match/rankings-match.component';
import { MatchtypesResolver } from '../matchtype/resolvers/matchtypes.resolver';
import { TeamsDashboardComponent } from '../teams/teams-dashboard/teams-dashboard.component';
import { TeamResolver } from '../teams/resolvers/team.resolver';
import { TournamentsByTeamResolver } from '../tournaments/resolvers/tournamentsbyteam.resolver';
import { TeamSquadResolver } from '../teams/resolvers/teamsquad.resolver';
import { TournamenttypesResolver } from '../tournamenttype/resolvers/tournamenttypes.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';

const routes: Routes = [
  {
    path: '',
    component: RankingsListComponent,
    resolve: {
      teams : TeamsResolver
    }
  },
  {
    path: 'new',
    component: RankingsMatchComponent,
    resolve: {
      matchtypes : MatchtypesResolver,
      tournamenttypes: TournamenttypesResolver,
      confederations: ConfederationsResolver,
      teams : TeamsResolver
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
export class RankingsRoutingModule { }
