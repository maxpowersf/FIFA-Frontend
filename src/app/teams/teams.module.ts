import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsSquadComponent } from './teams-squad/teams-squad.component';

@NgModule({
  declarations: [TeamsFormComponent, TeamsListComponent, TeamsSquadComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TeamsModule { }
