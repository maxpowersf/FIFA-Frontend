import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamStat } from '../models/teamstat.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TeamStatService {
  private teamstatUrl = environment.baseUrl + 'teamstat';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<TeamStat[]> {
    return this.httpClient.get<TeamStat[]>(this.teamstatUrl + '/getall');
  }

  public getOne(id: number): Observable<TeamStat> {
    return this.httpClient.get<TeamStat>(this.teamstatUrl + '/get/' + id);
  }

  public add(teamstat: TeamStat) {
    return this.httpClient.post(
      this.teamstatUrl + '/add',
      teamstat,
      httpOptions,
    );
  }

  public update(teamstat: TeamStat) {
    return this.httpClient.put(
      this.teamstatUrl + '/update',
      teamstat,
      httpOptions,
    );
  }
}
