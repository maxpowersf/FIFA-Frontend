import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfederationService } from '../confederation.service';

@Injectable({providedIn: 'root'})
export class ConfederationRankingResolver implements Resolve<Observable<any>> {
    constructor(
        private confederationService: ConfederationService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.confederationService.getAllByConfederation(parseInt(id, 10));
    }
}