import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Position } from '../models/position.model';
import { PositionsArray } from '../models/positionsArray.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json'})
};

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positionUrl = environment.baseUrl + 'position';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.positionUrl + '/getall');
  }

  public getByTournament(id: number): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.positionUrl + '/getbytournament/' + id);
  }

  public getOne(id: number): Observable<Position> {
    return this.httpClient.get<Position>(this.positionUrl + '/get/' + id);
  }

  public add(positions: PositionsArray) {
    return this.httpClient.post(this.positionUrl + '/add', positions, httpOptions);
  }

  public update(position: Position) {
    return this.httpClient.put(this.positionUrl + '/update', position, httpOptions);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.positionUrl + '/delete/' + id);
  }
}
