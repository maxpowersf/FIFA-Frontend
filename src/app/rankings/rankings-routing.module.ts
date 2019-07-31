import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingsListComponent } from './rankings-list/rankings-list.component';
import { TeamsResolver } from '../teams/teams.resolver';
import { RankingsMatchComponent } from './rankings-match/rankings-match.component';
import { MatchtypesResolver } from '../matchtype/matchtypes.resolver';

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
      teams : TeamsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingsRoutingModule { }
