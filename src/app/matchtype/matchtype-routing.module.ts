import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchtypeListComponent } from './matchtype-list/matchtype-list.component';
import { MatchtypeFormComponent } from './matchtype-form/matchtype-form.component';
import { MatchtypesResolver } from './matchtypes.resolver';
import { MatchtypeResolver } from './matchtype.resolver';

const routes: Routes = [
  {
    path: '',
    component: MatchtypeListComponent,
    resolve: {matchtypes : MatchtypesResolver}
  },
  {
    path: 'new',
    component: MatchtypeFormComponent
  },
  {
    path: ':id/edit',
    component: MatchtypeFormComponent,
    resolve: {
      matchtype: MatchtypeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchtypeRoutingModule { }
