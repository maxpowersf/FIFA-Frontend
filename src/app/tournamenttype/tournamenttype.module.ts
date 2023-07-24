import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamenttypeRoutingModule } from './tournamenttype-routing.module';
import { TournamenttypeListComponent } from './tournamenttype-list/tournamenttype-list.component';
import { TournamenttypeFormComponent } from './tournamenttype-form/tournamenttype-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamenttypeDetailComponent } from './tournamenttype-detail/tournamenttype-detail.component';

@NgModule({
  declarations: [
    TournamenttypeListComponent,
    TournamenttypeFormComponent,
    TournamenttypeDetailComponent,
  ],
  imports: [
    CommonModule,
    TournamenttypeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TournamenttypeModule {}
