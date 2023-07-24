import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' }),
};

@Injectable({
  providedIn: 'root',
})
export class GoalscorerService {
  private goalscorerUrl = environment.baseUrl + 'goalscorer';

  constructor(private httpClient: HttpClient) {}

  public getByTournament(tournamentId: number): Observable<Player[]> {
    return this.httpClient.get<Player[]>(
      this.goalscorerUrl + '/getbytournament/' + tournamentId,
    );
  }
}
