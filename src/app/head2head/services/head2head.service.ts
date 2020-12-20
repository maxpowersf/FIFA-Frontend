import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { H2H } from '../models/h2h.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class Head2headService {
  private h2hUrl = environment.baseUrl + 'h2h';

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  public getByTeam(teamId: number): Observable<H2H[]> {
    return this.httpClient.get<H2H[]>(this.h2hUrl + '/getbyteam/' + teamId);
  }

  public getByTeams(team1Id: number, team2Id: number = null): Observable<H2H> {
    return this.httpClient.get<H2H>(this.h2hUrl + '/getbyteams/' + team1Id + '/' + team2Id);
  }
}
