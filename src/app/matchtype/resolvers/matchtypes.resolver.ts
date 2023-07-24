import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchtypeService } from '../services/matchtype.service';

@Injectable({ providedIn: 'root' })
export class MatchtypesResolver {
  constructor(private matchtypeService: MatchtypeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.matchtypeService.getAll();
  }
}
