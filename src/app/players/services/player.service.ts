import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl = environment.baseUrl + 'player';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.playerUrl + '/getall');
  }

  public getAllByTeam(teamId: number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.playerUrl + '/getbyteam/' + teamId);
  }

  public getPlayersWithGoals(tournamentTypeId: number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.playerUrl + '/getplayerswithgoals/' + tournamentTypeId);
  }

  public getOne(id: number): Observable<Player> {
    return this.httpClient.get<Player>(this.playerUrl + '/get/' + id);
  }

  public add(player: Player) {
    return this.httpClient.post(this.playerUrl + '/add', player, httpOptions);
  }

  public update(player: Player) {
    return this.httpClient.put(this.playerUrl + '/update', player, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.playerUrl + '/delete/' + id);
  }
}
