import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private pathUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  insert(cliente: Cliente) {
    if (cliente.cli_id) {
      return this.http.put(this.pathUrl, cliente);
    } else {
      return this.http.post(this.pathUrl, cliente);
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
