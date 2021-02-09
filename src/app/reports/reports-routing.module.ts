import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportMatchesComponent } from './components/report-matches/report-matches.component';
import { ReportStreaksComponent } from './components/report-streaks/report-streaks.component';

import { ReportMatchesResolver } from './resolvers/reportmatches.resolver';
import { ReportStreaksResolver } from './resolvers/reportstreaks.resolver';


const routes: Routes = [
  {
    path: '',
    component: ReportsListComponent
  },
  {
    path: 'winning',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'unbeaten',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'losing',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'winningless',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'cleansheets',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'scoreless',
    component: ReportStreaksComponent,
    resolve: {
      streaks: ReportStreaksResolver
    }
  },
  {
    path: 'margin',
    component: ReportMatchesComponent,
    resolve: {
      matches: ReportMatchesResolver
    }
  },
  {
    path: 'goals',
    component: ReportMatchesComponent,
    resolve: {
      matches: ReportMatchesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
