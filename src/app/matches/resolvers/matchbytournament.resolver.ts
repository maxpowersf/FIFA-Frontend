import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from '../services/match.service';

@Injectable({providedIn: 'root'})
export class MatchByTournamentResolver implements Resolve<Observable<any>> {
    constructor(
        private matchService: MatchService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.matchService.getByTournament(parseInt(id, 10));
    }
}