import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PositionService } from '../services/position.service';

@Injectable({providedIn: 'root'})
export class PositionsResolver implements Resolve<Observable<any>> {
    constructor(
        private positionService: PositionService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.positionService.getByTournament(parseInt(id, 10));
    }
}