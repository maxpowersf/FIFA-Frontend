import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfederationsResolver } from './resolvers/confederations.resolver';
import { ConfederationResolver } from './resolvers/confederation.resolver';
import { ConfederationListComponent } from './confederation-list/confederation-list.component';
import { ConfederationFormComponent } from './confederation-form/confederation-form.component';
import { ConfederationRankingComponent } from './confederation-ranking/confederation-ranking.component';
import { ConfederationRankingResolver } from './resolvers/confederation-ranking.resolver';

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
