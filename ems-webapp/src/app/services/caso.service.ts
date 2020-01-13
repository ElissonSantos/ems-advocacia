import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Caso } from '../models/caso.model';

@Injectable({
  providedIn: 'root',
})
export class CasoService {

  private pathUrl = 'http://localhost:3000/casos';

  constructor(private http: HttpClient) { }

  insert(caso: Caso) {
    if (caso.cli_id) {
      return this.http.put(this.pathUrl, caso);
    } else {
      return this.http.post(this.pathUrl, caso);
    }
  }

  delete(id: string) {
    return this.http.delete(this.pathUrl, { [id]: id });
  }

  list() {
    return this.http.get(this.pathUrl);
  }

  read(id: number) {
    const url = this.pathUrl + '/' + id;
    return this.http.get(url);
  }
}
