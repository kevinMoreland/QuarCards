import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  hostname: string = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  checkRoom(lobbyCode: string) : Observable<any> {
    return this.http.post(`${this.hostname}/checkRoom`, {'code' : lobbyCode}, {responseType: 'text'});
  }
}
