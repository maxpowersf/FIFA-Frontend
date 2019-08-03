import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamenttypeService } from './tournamenttype.service';

@Injectable({providedIn: 'root'})
export class TournamenttypeResolver implements Resolve<Observable<any>> {
    constructor(
        private tournamenttypeService: TournamenttypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.tournamenttypeService.getOne(parseInt(id, 10));
    }
}