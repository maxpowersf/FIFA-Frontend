import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TournamentType } from '../models/tournamenttype.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class TournamenttypeService {
  private tournamenttypeUrl = environment.baseUrl + 'tournamenttype';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<TournamentType[]> {
    return this.httpClient.get<TournamentType[]>(this.tournamenttypeUrl);
  }

  public getOne(id: number): Observable<TournamentType> {
    return this.httpClient.get<TournamentType>(this.tournamenttypeUrl + '/' + id);
  }

  public add(tournamenttype: TournamentType) {
    return this.httpClient.post(this.tournamenttypeUrl, tournamenttype, httpOptions);
  }

  public update(tournamenttype: TournamentType) {
    return this.httpClient.put(this.tournamenttypeUrl, tournamenttype, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.tournamenttypeUrl + '/' + id);
  }
}
