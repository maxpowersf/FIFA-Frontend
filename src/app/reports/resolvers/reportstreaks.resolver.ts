import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/matches/services/match.service';

@Injectable({ providedIn: 'root' })
export class ReportStreaksResolver implements Resolve<Observable<any>> {
    constructor(
        private matchService: MatchService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let reportTypeID = route.params.type;
        let teamId = route.queryParams.teamId;

        return this.matchService.getReportStreak(reportTypeID, teamId);
    }
}