import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({providedIn: 'root'})
export class StandingsResolver implements Resolve<Observable<any>> {
    constructor(
        private tournamentService: TournamentService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.tournamentService.getCurrentStandings(parseInt(id, 10));
    }
}