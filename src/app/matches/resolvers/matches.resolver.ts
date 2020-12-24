import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchesCollectionRequest } from '../models/matchescollectionrequest.model';
import { MatchService } from '../services/match.service';

@Injectable({providedIn: 'root'})
export class MatchesResolver implements Resolve<Observable<any>> {
    constructor(
        private matchService: MatchService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let request = new MatchesCollectionRequest();
        request.quantity = 20;
        return this.matchService.getAll(request);
    }
}