import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({ providedIn: 'root' })
export class TournamentsByTeamResolver {
  constructor(private tournamentService: TournamentService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.tournamentService.getAllByTeam(parseInt(id, 10));
  }
}
