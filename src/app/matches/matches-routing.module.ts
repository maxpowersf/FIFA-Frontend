import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TeamsResolver } from '../teams/resolvers/teams.resolver';
import { TournamentsResolver } from '../tournaments/resolvers/tournaments.resolver';
import { TournamenttypesResolver } from '../tournamenttype/resolvers/tournamenttypes.resolver';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchesResolver } from './resolvers/matches.resolver';

const routes: Routes = [
  {
    path: '',
    component: MatchesListComponent,
    resolve: {
      teams: TeamsResolver,
      confederations: ConfederationsResolver,
      tournamentTypes: TournamenttypesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
