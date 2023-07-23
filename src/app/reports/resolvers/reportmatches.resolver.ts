import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/matches/services/match.service';

@Injectable({ providedIn: 'root' })
export class ReportMatchesResolver  {
    constructor(
        private matchService: MatchService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let path = route.routeConfig.path;
        switch (path) {
            case 'margin':
                return this.matchService.getReportMargin();
            case 'goals':
                return this.matchService.getReportGoals();
            default:
                return this.matchService.getReportMargin();
        }

    }
}