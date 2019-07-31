import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatchType } from './matchtype.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};


@Injectable({
  providedIn: 'root'
})
export class MatchtypeService {
  private matchtypeUrl = environment.baseUrl + 'matchtype';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<MatchType[]> {
    return this.httpClient.get<MatchType[]>(this.matchtypeUrl);
  }

  public getOne(id: number): Observable<MatchType> {
    return this.httpClient.get<MatchType>(this.matchtypeUrl + '/' + id);
  }

  public add(matchtype: MatchType) {
    return this.httpClient.post(this.matchtypeUrl, matchtype, httpOptions);
  }

  public update(matchtype: MatchType) {
    return this.httpClient.put(this.matchtypeUrl, matchtype, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.matchtypeUrl + '/' + id);
  }
}