import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamenttypeService } from '../services/tournamenttype.service';

@Injectable({providedIn: 'root'})
export class TournamenttypeResolver  {
    constructor(
        private tournamenttypeService: TournamenttypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.tournamenttypeService.getOne(parseInt(id, 10));
    }
}