import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Card from 'src/entity/Card';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  //hostName: String = 'http://localhost:3000';
  hostName = 'https://strawberry-sundae-17314.herokuapp.com';
  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.hostName}/api/cards`);
  }

  getCard(cardNum): Observable<Card> {
    return this.http.get<Card>(`${this.hostName}/api/cardByNum/` + cardNum);
  }

}
