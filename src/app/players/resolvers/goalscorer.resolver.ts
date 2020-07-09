import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GoalscorerService } from '../services/goalscorer.service';

@Injectable({providedIn: 'root'})
export class GoalscorerResolver implements Resolve<Observable<any>> {
    constructor(
        private goalscorerService: GoalscorerService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.goalscorerService.getByTournament(parseInt(id, 10));
    }
}