import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StreaksCollectionResponse } from 'src/app/reports/models/streakscollectionresponse.model';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match.model';
import { MatchesCollectionRequest } from '../models/matchescollectionrequest.model';

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

  public getAll(request: MatchesCollectionRequest): Observable<Match[]> {
    return this.httpClient.post<Match[]>(this.matchUrl + '/getfiltered', request, httpOptions);
  }

  public getByTournament(tournamentId: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getbytournament/' + tournamentId);
  }

  public getByTeam(team1Id: number): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getbyteam/' + team1Id);
  }

  public getByTeams(team1Id: number, team2Id: number = null, worldcup: boolean): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getbyteams/' + team1Id + '/' + team2Id + '?worldcup=' + worldcup);
  }

  public getReportMargin(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getreportmargin');
  }

  public getReportGoals(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.matchUrl + '/getreportgoals');
  }

  public getReportStreak(reportType: number, teamId: number = 0, amount: number = 20): Observable<StreaksCollectionResponse[]> {
    let urlParams = '?teamId=' + teamId + '&amount=' + amount;
    return this.httpClient.get<StreaksCollectionResponse[]>(this.matchUrl + '/getreportstreak/' + reportType + urlParams);
  }
}
