import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfederationsRoutingModule } from './confederations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfederationFormComponent } from './confederation-form/confederation-form.component';
import { ConfederationListComponent } from './confederation-list/confederation-list.component';
import { RankingsModule } from '../rankings/rankings.module';
import { ConfederationRankingComponent } from './confederation-ranking/confederation-ranking.component';

@NgModule({
  declarations: [
    ConfederationFormComponent,
    ConfederationListComponent,
    ConfederationRankingComponent,
  ],
  imports: [
    CommonModule,
    ConfederationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RankingsModule,
  ],
})
export class ConfederationsModule {}
