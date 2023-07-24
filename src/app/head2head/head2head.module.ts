import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Head2headRoutingModule } from './head2head-routing.module';
import { Head2headDetailComponent } from './head2head-detail/head2head-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Head2headDetailComponent],
  imports: [
    CommonModule,
    Head2headRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Head2HeadModule {}
