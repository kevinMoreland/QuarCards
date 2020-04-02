import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import Card from 'src/entity/Card';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  availableCards: Card[] = new Array();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => 
      this.availableCards = cards);
      
  }

  setCardTextRandom(cardTextEl : HTMLElement)
  {
    //This commented out code doesn't work because it thinks available cards is undefined. Why is this?
    //cardTextEl.textContent = this.availableCards[0].card_text;
    cardTextEl.textContent = "test";
  }
}
