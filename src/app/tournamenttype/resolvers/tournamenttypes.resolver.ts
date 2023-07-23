import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamenttypeService } from '../services/tournamenttype.service';

@Injectable({providedIn: 'root'})
export class TournamenttypesResolver  {
    constructor(
        private tournamenttypeService: TournamenttypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.tournamenttypeService.getAll();
    }
}