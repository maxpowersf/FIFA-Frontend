import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '@environment/environment';
import { httpOptions } from '@shared/app.constants';
import { Confederation } from '../models';

@Injectable()
export class ConfederationsService {
  constructor(private httpClient: HttpClient) {}

  private confederationUrl = `${environment.baseUrl}confederation`;

  public getAll(): Observable<Confederation[]> {
    const url = `${this.confederationUrl}/getall`;
    return this.httpClient
      .get<Confederation[]>(url)
      .pipe(tap((response) => console.log('confederations', response)));
  }

  public getOne(id: number): Observable<Confederation> {
    const url = `${this.confederationUrl}/get/${id}`;
    return this.httpClient.get<Confederation>(url);
  }

  public add(confederation: Confederation) {
    const url = `${this.confederationUrl}/add/`;
    return this.httpClient.post(url, confederation, httpOptions);
  }

  public update(confederation: Confederation) {
    const url = `${this.confederationUrl}/update/`;
    return this.httpClient.put(url, confederation, httpOptions);
  }

  public delete(id: number) {
    const url = `${this.confederationUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
