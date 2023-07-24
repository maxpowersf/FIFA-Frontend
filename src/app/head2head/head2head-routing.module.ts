import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsResolver } from '../teams/resolvers/teams.resolver';
import { Head2headDetailComponent } from './head2head-detail/head2head-detail.component';

const routes: Routes = [
  {
    path: '',
    component: Head2headDetailComponent,
    resolve: {
      teams: TeamsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Head2headRoutingModule {}
