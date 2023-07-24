import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Confederation } from '../models/confederation.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ConfederationService {
  private confederationUrl = environment.baseUrl + 'confederation';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Confederation[]> {
    return this.httpClient.get<Confederation[]>(
      this.confederationUrl + '/getall/',
    );
  }

  public getOne(id: number): Observable<Confederation> {
    return this.httpClient.get<Confederation>(
      this.confederationUrl + '/get/' + id,
    );
  }

  public add(confederation: Confederation) {
    return this.httpClient.post(
      this.confederationUrl + '/add/',
      confederation,
      httpOptions,
    );
  }

  public update(confederation: Confederation) {
    return this.httpClient.put(
      this.confederationUrl + '/update/',
      confederation,
      httpOptions,
    );
  }

  public delete(id: number) {
    return this.httpClient.delete(this.confederationUrl + '/delete/' + id);
  }
}
