import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import Card from 'src/entity/Card';
import { Output } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  availableCards: Card[] = new Array();

  @Output() currMode : String;
  modeNum : number = 0;
  modeNames : String[] = ["my-turn", "voting"];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => 
      this.availableCards = cards);

      this.modeNum = 0;
      this.currMode = this.modeNames[this.modeNum];
  }

  changeState() : void {
    this.modeNum = (this.modeNum + 1)%this.modeNames.length;
    this.currMode = this.modeNames[this.modeNum];
  }
}
