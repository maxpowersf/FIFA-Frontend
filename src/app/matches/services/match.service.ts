import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matchUrl = environment.baseUrl + 'match';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getByTournament(tournamentId: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getbytournament/' + tournamentId);
  }
}
