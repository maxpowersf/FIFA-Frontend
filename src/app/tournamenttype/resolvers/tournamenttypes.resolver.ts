import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamenttypeService } from '../tournamenttype.service';

@Injectable({providedIn: 'root'})
export class TournamenttypesResolver implements Resolve<Observable<any>> {
    constructor(
        private tournamenttypeService: TournamenttypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.tournamenttypeService.getAll();
    }
}