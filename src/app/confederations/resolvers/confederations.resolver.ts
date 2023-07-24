import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfederationService } from '../services/confederation.service';

@Injectable({ providedIn: 'root' })
export class ConfederationsResolver {
  constructor(private confederationService: ConfederationService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.confederationService.getAll();
  }
}
