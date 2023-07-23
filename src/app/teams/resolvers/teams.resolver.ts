import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from '../services/team.service';

@Injectable({providedIn: 'root'})
export class TeamsResolver  {
    constructor(
        private teamService: TeamService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.teamService.getAll();
    }
}