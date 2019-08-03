import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'matchtypes',
    loadChildren: './matchtype/matchtype.module#MatchtypeModule'
  },
  {
    path: 'confederations',
    loadChildren: './confederations/confederations.module#ConfederationsModule'
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule'
  },
  {
    path: 'rankings',
    loadChildren: './rankings/rankings.module#RankingsModule'
  },
  {
    path: 'tournamenttypes',
    loadChildren: './tournamenttype/tournamenttype.module#TournamenttypeModule'
  },
  {
    path: 'tournaments',
    loadChildren: './tournaments/tournaments.module#TournamentsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
