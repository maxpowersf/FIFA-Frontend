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
    loadChildren: () => import('./matchtype/matchtype.module').then(m => m.MatchtypeModule)
  },
  {
    path: 'confederations',
    loadChildren: () => import('./confederations/confederations.module').then(m => m.ConfederationsModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'rankings',
    loadChildren: () => import('./rankings/rankings.module').then(m => m.RankingsModule)
  },
  {
    path: 'tournamenttypes',
    loadChildren: () => import('./tournamenttype/tournamenttype.module').then(m => m.TournamenttypeModule)
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'teamstats',
    loadChildren: () => import('./teamstats/teamstats.module').then(m => m.TeamstatsModule)
  },
  {
    path: 'head2head',
    loadChildren: () => import('./head2head/head2head.module').then(m => m.Head2HeadModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
