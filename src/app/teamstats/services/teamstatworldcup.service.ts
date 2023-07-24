import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamStatWorldCup } from '../models/teamstatworldcup.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TeamStatworldcupService {
  private teamstatworldcupUrl = environment.baseUrl + 'teamstatworldcup';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<TeamStatWorldCup[]> {
    return this.httpClient.get<TeamStatWorldCup[]>(
      this.teamstatworldcupUrl + '/getall',
    );
  }

  public getOne(id: number): Observable<TeamStatWorldCup> {
    return this.httpClient.get<TeamStatWorldCup>(
      this.teamstatworldcupUrl + '/get/' + id,
    );
  }

  public add(teamstatworldcup: TeamStatWorldCup) {
    return this.httpClient.post(
      this.teamstatworldcupUrl + '/add',
      teamstatworldcup,
      httpOptions,
    );
  }

  public update(teamstatworldcup: TeamStatWorldCup) {
    return this.httpClient.put(
      this.teamstatworldcupUrl + '/update',
      teamstatworldcup,
      httpOptions,
    );
  }
}
