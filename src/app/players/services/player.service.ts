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
    return this.httpClient.get<Player[]>(this.playerUrl);
  }

  public getOne(id: number): Observable<Player> {
    return this.httpClient.get<Player>(this.playerUrl + '/' + id);
  }

  public add(player: Player) {
    return this.httpClient.post(this.playerUrl, player, httpOptions);
  }

  public update(player: Player) {
    return this.httpClient.put(this.playerUrl, player, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.playerUrl + '/' + id);
  }
}
