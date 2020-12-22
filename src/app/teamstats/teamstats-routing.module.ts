import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfederationsResolver } from '../confederations/resolvers/confederations.resolver';
import { TeamStatsResolver } from './resolvers/teamstats.resolver';
import { TeamStatsWorldCupResolver } from './resolvers/teamstatsworldcup.resolver';
import { TeamstatListComponent } from './teamstat-list/teamstat-list.component';

const routes: Routes = [
  {
    path: '',
    component: TeamstatListComponent,
    resolve: {
      teamstats: TeamStatsResolver,
      teamstatsWorldCup: TeamStatsWorldCupResolver,
      confederations: ConfederationsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamstatsRoutingModule { }
