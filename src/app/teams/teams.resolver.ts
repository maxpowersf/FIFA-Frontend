import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from './team.service';

@Injectable({providedIn: 'root'})
export class TeamsResolver implements Resolve<Observable<any>> {
    constructor(
        private teamService: TeamService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.teamService.getAll();
    }
}