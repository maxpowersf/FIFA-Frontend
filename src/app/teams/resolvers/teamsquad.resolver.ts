import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/players/services/player.service';

@Injectable({providedIn: 'root'})
export class TeamSquadResolver implements Resolve<Observable<any>> {
    constructor(
        private playerService: PlayerService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const teamId = route.paramMap.get('id');
        return this.playerService.getAllByTeam(parseInt(teamId, 10));
    }
}