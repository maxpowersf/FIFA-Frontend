import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsFormComponent } from './teams-form/teams-form.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeamsFormComponent, TeamsListComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TeamsModule { }
