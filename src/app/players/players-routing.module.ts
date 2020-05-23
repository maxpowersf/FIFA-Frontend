import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersResolver } from './resolvers/players.resolver';
import { PlayerResolver } from './resolvers/player.resolver';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersFormComponent } from './players-form/players-form.component';
import { TeamsResolver } from '../teams/resolvers/teams.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlayersListComponent,
    resolve: {players : PlayersResolver}
  },
  {
    path: 'new',
    component: PlayersFormComponent,
    resolve: {
      teams: TeamsResolver
    }
  },
  {
    path: ':id/edit',
    component: PlayersFormComponent,
    resolve: {
      player: PlayerResolver,
      teams: TeamsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
