import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsListComponent } from './rankings-list/rankings-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RankingsMatchComponent } from './rankings-match/rankings-match.component';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  declarations: [RankingsListComponent, RankingsMatchComponent],
  imports: [
    CommonModule,
    RankingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TeamsModule
  ]
})
export class RankingsModule { }
