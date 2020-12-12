import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamenttypeListComponent } from './tournamenttype-list/tournamenttype-list.component';
import { TournamenttypeFormComponent } from './tournamenttype-form/tournamenttype-form.component';
import { TournamenttypesResolver } from './resolvers/tournamenttypes.resolver';
import { TournamenttypeResolver } from './resolvers/tournamenttype.resolver';
import { TournamenttypeDetailResolver } from './resolvers/tournamenttype-detail.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TournamenttypeDetailComponent } from './tournamenttype-detail/tournamenttype-detail.component';
import { TournamentsByTournamentTypeResolver } from '../tournaments/resolvers/tournamentsbytournamenttype.resolver';
import { MatchtypesResolver } from '../matchtype/resolvers/matchtypes.resolver';

const routes: Routes = [
  {
    path: '',
    component: TournamenttypeListComponent,
    resolve: {
      tournamenttypes : TournamenttypesResolver
    }
  },
  {
    path: 'new',
    component: TournamenttypeFormComponent,
    resolve: {
      matchtypes: MatchtypesResolver,
      confederations: ConfederationsResolver
    }
  },
  {
    path: ':id/edit',
    component: TournamenttypeFormComponent,
    resolve: {
      tournamenttype: TournamenttypeResolver,
      matchtypes: MatchtypesResolver,
      confederations: ConfederationsResolver
    }
  },
  {
    path: ':id/history',
    component: TournamenttypeDetailComponent,
    resolve: {
      tournamenttype: TournamenttypeDetailResolver,
      tournaments: TournamentsByTournamentTypeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamenttypeRoutingModule { }
