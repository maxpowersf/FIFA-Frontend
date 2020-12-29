import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
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
  },
  {
    path: 'players',
    loadChildren: './players/players.module#PlayersModule'
  },
  {
    path: 'teamstats',
    loadChildren: './teamstats/teamstats.module#TeamstatsModule'
  },
  {
    path: 'head2head',
    loadChildren: './head2head/head2head.module#Head2HeadModule'
  },
  {
    path: 'matches',
    loadChildren: './matches/matches.module#MatchesModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
