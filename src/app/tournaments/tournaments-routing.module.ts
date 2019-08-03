import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { TournamentsFormComponent } from './tournaments-form/tournaments-form.component';
import { TournamentsResolver } from './tournaments.resolver';
import { TournamentResolver } from './tournament.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TournamenttypesResolver } from '../tournamenttype/tournamenttypes.resolver';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
