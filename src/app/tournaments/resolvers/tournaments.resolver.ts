import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({providedIn: 'root'})
export class TournamentsResolver implements Resolve<Observable<any>> {
    constructor(
        private tournamentService: TournamentService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.tournamentService.getAll();
    }
}