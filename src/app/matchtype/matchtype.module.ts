import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchtypeRoutingModule } from './matchtype-routing.module';
import { MatchtypeListComponent } from './matchtype-list/matchtype-list.component';
import { MatchtypeFormComponent } from './matchtype-form/matchtype-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MatchtypeListComponent, MatchtypeFormComponent],
  imports: [
    CommonModule,
    MatchtypeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MatchtypeModule {}
