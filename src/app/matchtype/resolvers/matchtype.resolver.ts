import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchtypeService } from '../services/matchtype.service';

@Injectable({ providedIn: 'root' })
export class MatchtypeResolver {
  constructor(private matchtypeService: MatchtypeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.matchtypeService.getOne(parseInt(id, 10));
  }
}
