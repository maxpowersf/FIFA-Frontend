import { Injectable } from '@angular/core';

import { ConfederationService } from '../services';

@Injectable({ providedIn: 'root' })
export class ConfederationsResolver {
  constructor(private confederationService: ConfederationService) {}

  resolve() {
    return this.confederationService.getAll();
  }
}
