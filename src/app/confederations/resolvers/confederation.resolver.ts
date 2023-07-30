import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { ConfederationService } from '../services';

@Injectable({ providedIn: 'root' })
export class ConfederationResolver {
  constructor(private confederationService: ConfederationService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.confederationService.getOne(parseInt(id, 10));
  }
}
