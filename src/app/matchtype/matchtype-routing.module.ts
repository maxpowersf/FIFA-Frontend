import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchtypeFormComponent } from './matchtype-form/matchtype-form.component';
import { MatchtypeListComponent } from './matchtype-list/matchtype-list.component';
import { MatchtypeResolver } from './resolvers/matchtype.resolver';
import { MatchtypesResolver } from './resolvers/matchtypes.resolver';

const routes: Routes = [
  {
    path: '',
    component: MatchtypeListComponent,
    resolve: { matchtypes: MatchtypesResolver },
  },
  {
    path: 'new',
    component: MatchtypeFormComponent,
  },
  {
    path: ':id/edit',
    component: MatchtypeFormComponent,
    resolve: {
      matchtype: MatchtypeResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchtypeRoutingModule {}
