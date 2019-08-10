import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from './match.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private rankingUrl = environment.baseUrl + 'ranking';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public add(match: Match) {
    return this.httpClient.post(this.rankingUrl + '/add', match, httpOptions);
  }

  public update() {
    return this.httpClient.get(this.rankingUrl + '/update', httpOptions);
  }

  public finishPeriod() {
    return this.httpClient.get(this.rankingUrl + '/finishPeriod', httpOptions);
  }
}
