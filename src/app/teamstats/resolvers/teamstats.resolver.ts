import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamStatService } from '../services/teamstat.service';

@Injectable({providedIn: 'root'})
export class TeamStatsResolver implements Resolve<Observable<any>> {
    constructor(
        private teamstatService: TeamStatService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.teamstatService.getAll();
    }
}