import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamstatsRoutingModule } from './teamstats-routing.module';
import { TeamstatListComponent } from './teamstat-list/teamstat-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
