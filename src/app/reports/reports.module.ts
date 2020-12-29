import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReportMatchesComponent } from './components/report-matches/report-matches.component';
import { ReportStreaksComponent } from './components/report-streaks/report-streaks.component';

@NgModule({
  declarations: [ReportsListComponent, ReportMatchesComponent, ReportStreaksComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule { }
