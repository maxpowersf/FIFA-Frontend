import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from 'src/app/teams/services/team.service';

@Injectable({ providedIn: 'root' })
export class ConfederationRankingResolver {
  constructor(private teamService: TeamService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.teamService.getAllByConfederation(parseInt(id, 10));
  }
}
