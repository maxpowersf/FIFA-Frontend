import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';

@Injectable({providedIn: 'root'})
export class PlayersResolver implements Resolve<Observable<any>> {
    constructor(
        private playerService: PlayerService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.playerService.getAll();
    }
}