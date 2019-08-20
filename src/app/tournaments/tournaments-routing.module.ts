import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsFormComponent } from './tournaments-form/tournaments-form.component';
import { TournamentsResolver } from './resolvers/tournaments.resolver';
import { TournamentResolver } from './resolvers/tournament.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TournamenttypesResolver } from '../tournamenttype/tournamenttypes.resolver';
import { TournamentsPositionComponent } from './tournaments-position/tournaments-position.component';
import { TournamentsDetailComponent } from './tournaments-detail/tournaments-detail.component';
import { PositionsResolver } from './resolvers/positions.resolver';

const routes: Routes = [
  {
    path: '',
    component: TournamentsListComponent,
    resolve: {
      tournaments : TournamentsResolver
    }
  },
  {
    path: 'new',
    component: TournamentsFormComponent,
    resolve: {
      tournamenttypes: TournamenttypesResolver,
      confederations: ConfederationsResolver
    }
  },
  {
    path: ':id/edit',
    component: TournamentsFormComponent,
    resolve: {
      tournamenttypes: TournamenttypesResolver,
      confederations: ConfederationsResolver,
      tournament: TournamentResolver
    }
  },
  {
    path: ':id/position',
    component: TournamentsDetailComponent,
    resolve: {
      tournament: TournamentResolver
    }
  },
  {
    path: ':id/positions',
    component: TournamentsPositionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
