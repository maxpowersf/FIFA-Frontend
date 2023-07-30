import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RankingsModule } from '../rankings/rankings.module';
import { SharedModule } from '../shared/shared.module';
import { ConfederationFormComponent } from './confederation-form';
import { ConfederationListComponent } from './confederation-list';
import { ConfederationRankingComponent } from './confederation-ranking';
import { ConfederationsRoutingModule } from './confederations-routing.module';

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
