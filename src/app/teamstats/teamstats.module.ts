import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TeamstatListComponent } from './teamstat-list/teamstat-list.component';
import { TeamstatsRoutingModule } from './teamstats-routing.module';

@NgModule({
  declarations: [TeamstatListComponent],
  imports: [
    CommonModule,
    TeamstatsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeamstatsModule {}
