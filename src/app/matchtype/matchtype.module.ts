import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { MatchtypeFormComponent } from './matchtype-form/matchtype-form.component';
import { MatchtypeListComponent } from './matchtype-list/matchtype-list.component';
import { MatchtypeRoutingModule } from './matchtype-routing.module';

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
