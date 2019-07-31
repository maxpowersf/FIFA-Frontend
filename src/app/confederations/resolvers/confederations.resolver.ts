import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfederationService } from '../confederation.service';

@Injectable({providedIn: 'root'})
export class ConfederationsResolver implements Resolve<Observable<any>> {
    constructor(
        private confederationService: ConfederationService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.confederationService.getAll();
    }
}