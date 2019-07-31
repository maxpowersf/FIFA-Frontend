import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchtypeService } from './matchtype.service';

@Injectable({providedIn: 'root'})
export class MatchtypeResolver implements Resolve<Observable<any>> {
    constructor(
        private matchtypeService: MatchtypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.matchtypeService.getOne(parseInt(id, 10));
    }
}