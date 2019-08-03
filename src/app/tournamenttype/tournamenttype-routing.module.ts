import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamenttypeListComponent } from './tournamenttype-list/tournamenttype-list.component';
import { TournamenttypeFormComponent } from './tournamenttype-form/tournamenttype-form.component';
import { TournamenttypesResolver } from './tournamenttypes.resolver';
import { TournamenttypeResolver } from './tournamenttype.resolver';

const routes: Routes = [
  {
    path: '',
    component: TournamenttypeListComponent,
    resolve: {
      tournamenttypes : TournamenttypesResolver
    }
  },
  {
    path: 'new',
    component: TournamenttypeFormComponent
  },
  {
    path: ':id/edit',
    component: TournamenttypeFormComponent,
    resolve: {
      tournamenttype: TournamenttypeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamenttypeRoutingModule { }
