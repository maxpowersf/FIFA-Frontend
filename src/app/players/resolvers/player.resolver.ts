import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';

@Injectable({providedIn: 'root'})
export class PlayerResolver implements Resolve<Observable<any>> {
    constructor(
        private playerService: PlayerService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return this.playerService.getOne(parseInt(id, 10));
    }
}