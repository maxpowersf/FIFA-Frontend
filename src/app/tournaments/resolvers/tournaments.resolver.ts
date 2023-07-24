import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({ providedIn: 'root' })
export class TournamentsResolver {
  constructor(private tournamentService: TournamentService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.tournamentService.getAll();
  }
}
