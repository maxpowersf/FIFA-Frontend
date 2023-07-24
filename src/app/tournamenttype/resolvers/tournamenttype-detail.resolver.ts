import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamenttypeService } from '../services/tournamenttype.service';

@Injectable({ providedIn: 'root' })
export class TournamenttypeDetailResolver {
  constructor(private tournamentTypeService: TournamenttypeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.tournamentTypeService.getOne(parseInt(id, 10));
  }
}
