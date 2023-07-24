import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportMatchesComponent } from './components/report-matches/report-matches.component';
import { ReportStreaksComponent } from './components/report-streaks/report-streaks.component';

import { ReportMatchesResolver } from './resolvers/reportmatches.resolver';
import { ReportStreaksResolver } from './resolvers/reportstreaks.resolver';
import { TeamsResolver } from '../teams/resolvers/teams.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReportsListComponent,
    resolve: {
      teams: TeamsResolver,
    },
  },
  {
    path: 'streaks/:type',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver,
    },
  },
  {
    path: 'margin',
    component: ReportMatchesComponent,
    resolve: {
      matches: ReportMatchesResolver,
    },
  },
  {
    path: 'goals',
    component: ReportMatchesComponent,
    resolve: {
      matches: ReportMatchesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
