import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfederationFormComponent } from './confederation-form';
import { ConfederationListComponent } from './confederation-list';
import { ConfederationRankingComponent } from './confederation-ranking';
import {
  ConfederationRankingResolver,
  ConfederationResolver,
  ConfederationsResolver,
} from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ConfederationListComponent,
    resolve: { confederations: ConfederationsResolver },
  },
  {
    path: 'new',
    component: ConfederationFormComponent,
  },
  {
    path: ':id/edit',
    component: ConfederationFormComponent,
    resolve: {
      confederation: ConfederationResolver,
    },
  },
  {
    path: ':id/view',
    component: ConfederationRankingComponent,
    resolve: {
      teams: ConfederationRankingResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfederationsRoutingModule {}
