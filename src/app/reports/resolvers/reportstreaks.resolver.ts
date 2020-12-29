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
        let path = route.routeConfig.path;
        switch (path) {
            case 'winning':
                return this.matchService.getReportWinning();
            case 'unbeaten':
                return this.matchService.getReportUnbeaten();
            case 'losing':
                return this.matchService.getReportLosing();
            case 'winningless':
                return this.matchService.getReportWinningless();
            default:
                return this.matchService.getReportWinning();
        }
    }
}