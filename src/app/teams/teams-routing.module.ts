import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { TeamsResolver } from './teams.resolver';
import { TeamResolver } from './team.resolver';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';

const routes: Routes = [
  {
    path: '',
    component: TeamsListComponent,
    resolve: {
      teams : TeamsResolver
    }
  },
  {
    path: 'new',
    component: TeamsFormComponent,
    resolve: {
      confederations : ConfederationsResolver
    }
  },
  {
    path: ':id/edit',
    component: TeamsFormComponent,
    resolve: {
      confederations : ConfederationsResolver,
      team: TeamResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
