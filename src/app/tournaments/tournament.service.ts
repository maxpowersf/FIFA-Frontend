import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tournamentUrl = environment.baseUrl + 'tournament';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<Tournament[]> {
    return this.httpClient.get<Tournament[]>(this.tournamentUrl);
  }

  public getOne(id: number): Observable<Tournament> {
    return this.httpClient.get<Tournament>(this.tournamentUrl + '/' + id);
  }

  public add(tournament: Tournament) {
    return this.httpClient.post(this.tournamentUrl, tournament, httpOptions);
  }

  public update(tournament: Tournament) {
    return this.httpClient.put(this.tournamentUrl, tournament, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.tournamentUrl + '/' + id);
  }
}
