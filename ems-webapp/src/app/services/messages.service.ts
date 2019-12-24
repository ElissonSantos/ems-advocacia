import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  private pathUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(this.pathUrl);
  }

  getMessage(id: number) {
    const url = this.pathUrl + '/' + id;
    return this.http.get(url);
  }

}
