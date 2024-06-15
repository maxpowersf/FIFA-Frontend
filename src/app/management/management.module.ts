import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';
import { ConfederationsContainerComponent } from './components/confederations-container/confederations-container.component';
import { ConfederationsFormComponent } from './components/confederations-form/confederations-form.component';
import { ManagementRoutingModule } from './management-routing.module';
import { ConfederationsService } from './services';
import {
  ConfederationsEffects,
  MANAGEMENT_FEATURE,
  managementReducer,
} from './state';

@NgModule({
  declarations: [ConfederationsContainerComponent, ConfederationsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ManagementRoutingModule,
    StoreModule.forFeature(MANAGEMENT_FEATURE, managementReducer),
    EffectsModule.forFeature([ConfederationsEffects]),
    TranslateModule,
  ],
  providers: [ConfederationsService],
})
export class ManagementModule {}
