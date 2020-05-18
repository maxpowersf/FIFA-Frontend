import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchtypeService } from '../services/matchtype.service';

@Injectable({providedIn: 'root'})
export class MatchtypesResolver implements Resolve<Observable<any>> {
    constructor(
        private matchtypeService: MatchtypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.matchtypeService.getAll();
    }
}