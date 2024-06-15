import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ConfederationsContainerComponent,
  ConfederationsFormComponent,
} from './components';

const routes: Routes = [
  {
    path: 'confederations',
    component: ConfederationsContainerComponent,
  },
  {
    path: 'confederations/new',
    component: ConfederationsFormComponent,
  },
  {
    path: 'confederations/edit/:id',
    component: ConfederationsFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
