import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from '../services/team.service';

@Injectable({ providedIn: 'root' })
export class TeamResolver {
  constructor(private teamService: TeamService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.teamService.getOne(parseInt(id, 10));
  }
}
