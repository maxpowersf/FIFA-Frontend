import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamStatworldcupService } from '../services/teamstatworldcup.service';

@Injectable({providedIn: 'root'})
export class TeamStatsWorldCupResolver implements Resolve<Observable<any>> {
    constructor(
        private teamstatworldcupService: TeamStatworldcupService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.teamstatworldcupService.getAll();
    }
}