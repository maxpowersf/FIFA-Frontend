import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfederationService } from '../services/confederation.service';

@Injectable({providedIn: 'root'})
export class ConfederationResolver implements Resolve<Observable<any>> {
    constructor(
        private confederationService: ConfederationService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.confederationService.getOne(parseInt(id, 10));
    }
}