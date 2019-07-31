import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from './team.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl = environment.baseUrl + 'team';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.teamUrl);
  }

  public getOne(id: number): Observable<Team> {
    return this.httpClient.get<Team>(this.teamUrl + '/' + id);
  }

  public add(team: Team) {
    return this.httpClient.post(this.teamUrl, team, httpOptions);
  }

  public update(team: Team) {
    return this.httpClient.put(this.teamUrl, team, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.teamUrl + '/' + id);
  }
}
