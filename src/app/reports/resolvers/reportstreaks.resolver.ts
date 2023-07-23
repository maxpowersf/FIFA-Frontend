import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/matches/services/match.service';

@Injectable({ providedIn: 'root' })
export class ReportStreaksResolver  {
    constructor(
        private matchService: MatchService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let reportTypeID = route.params.type;
        let teamId = route.queryParams.teamId;
        let active = route.queryParams.active;

        return this.matchService.getReportStreak(reportTypeID, teamId, active);
    }
}