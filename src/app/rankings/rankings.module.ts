import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TeamsModule } from '../teams/teams.module';
import { RankingsListComponent } from './rankings-list/rankings-list.component';
import { RankingsMatchComponent } from './rankings-match/rankings-match.component';
import { RankingsRoutingModule } from './rankings-routing.module';

@NgModule({
  declarations: [RankingsListComponent, RankingsMatchComponent],
  imports: [
    CommonModule,
    RankingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TeamsModule,
  ],
})
export class RankingsModule {}
